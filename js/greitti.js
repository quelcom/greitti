/*
 * Greitti module
 * Author: Josep Roca
 *
 */
var Greitti = function() {

    var map;
    var coords = [];

    var allMarkers = [];
    var allPaths = [];

    // I spend a lot of time in these coordinates (that's Frantic, not DTM =))
    var fLatLng = new google.maps.LatLng("60.16281419297092", "24.940303266001365");
    var fMarker = null;

    var circle;

    var start = "http://www.google.com/mapfiles/dd-start.png";
    var end   = "http://www.google.com/mapfiles/dd-end.png";

    // Set up the map
    var latlng = new google.maps.LatLng(60.1704686512, 24.9413144588);
    var myOptions = {
        zoom: 12,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var strokeColor = {
       1: "#193695",    // Helsinki internal bus lines
       2: "#00FF00",    // trams
       3: "#193695",    // Espoo internal bus lines
       4: "#193695",    // Vantaa internal bus lines
       5: "#193695",    // regional bus lines
       6: "#FF9000",    // metro
       7: "#00AEE7",    // ferry
       8: "#ff0000",    // U-lines
       12: "#FF0000",   // commuter trains
       21: "#193695",   // Helsinki service lines
       22: "#193695",   // Helsinki night buses
       23: "#193695",   // Espoo service lines
       24: "#193695",   // Vantaa service lines
       25: "#193695",   // region night buses
       36: "#193695",   // Kirkkonummi internal bus lines
       39: "#193695",   // Kerava internal bus lines
       walk: "#443300"  // walking
    };

    var transportTypes = {
        1: "Bus",
        2: "Tram",
        5: "Bus",
        7: "Boat",
        12: "Train",
        walk: "Walk"
    };

    var depTimeParser = function(depTime) {
        return depTime.substr(8,2) + ':' + depTime.substr(10,2);
    };

    var codeParser = function(code, type) {
        var res = typeParser(type);
        res += ' ' + code.substr(1,3);

        if (code.substr(0) == "2") {
            res += ' (two zones)';
        }

        return res;
    }

    var typeParser = function(type) {
        if ( transportTypes[type] ) {
            return transportTypes[type];
        }
        return "[unknown type]: " + type;
    }

    /*
     * Register and event listener
     * to include information of the
     * current point information
     *
     */
    var registerMarker = function(marker, data) {
        allMarkers.push(marker);

        google.maps.event.addListener(marker, 'mouseover', function() {

            var info = document.getElementById('info');

            if ( data.legs ) {
                info.innerHTML = "<p>Duration: " + data.legs.duration + "</p>";
                info.innerHTML += "<p>Length: " + data.legs.length + "m.</p>";

                if ( data.legs.code ) {
                    info.innerHTML += "<p>Code: " + codeParser(data.legs.code, data.legs.type) + "</p>";
                } else {
                    info.innerHTML += "<p>Type: " + typeParser(data.legs.type) + "</p>";
                }
            }
            else if ( data.loc ) {
                info.innerHTML = "<p>Departure time: " + depTimeParser(data.loc.depTime) + "</p>";
                info.innerHTML += "<p>Name: " + data.loc.name + "</p>";
            }

            // Small surrounding circle when mouseovering on a marker
            if ( circle && circle.getMap() ) {
                circle.setMap(null);
            }

            circle = new google.maps.Circle({
                map: map,
                radius: 50
            });

            circle.bindTo('center', marker, 'position');

        });
    };

    /*
     * Clear all markers and polylines
     * we have before plotting a new and fresh route
     */
    var deleteMarkers = function() {
        if ( allPaths ) {
            for ( i in allPaths ) {
                allPaths[i].setMap(null);
            }
            allPaths = [];
        }

        if ( allMarkers ) {
            for ( i in allMarkers ) {
                allMarkers[i].setMap(null);
            }
            allMarkers = [];
        }
    };

    var iterateLegs = function(data) {
        deleteMarkers();

        var legs = data[0].legs;
        for ( var i = 0; i < legs.length; i++ ) {
            var latlng = new google.maps.LatLng(legs[i].locs[0].coord.y, legs[i].locs[0].coord.x);

            marker = new google.maps.Marker({
                position: latlng,
                map: map,
                zIndex: 4
            });

            coords.push(latlng);

            registerMarker(marker, { legs: legs[i] } );
            parseLeg(legs[i]);
        }

        if ( allPaths ) {
            for ( i in allPaths ) {
                allPaths[i].setMap(map);
            }
        }
    };

    var parseLeg = function(leg) {
        /*
         * Properties:
         * duration
         * length
         * locs [] <- handled by plotLoc
         * type
         *
         */

        // First one has been already plotted (big icon) so it can be discarded
        // Also forget the last one intentionally because it will be plotted later
        leg.locs.shift();
        for ( var i = 0; i < leg.locs.length - 1 ; i++ ) {
            plotLoc(leg.locs[i]);
        }

        // Last one to be processed
        addToCoords(leg.locs.pop());

        // Red default
        var color = ( strokeColor[leg.type] ) ? strokeColor[leg.type] : "#FF0000";

        var path = new google.maps.Polyline({
            strokeColor: color,
            strokeOpacity: 1.0,
            strokeWeight: 2,
            path: coords
        });
        allPaths.push(path);

        coords = [];
    };

    // We just need the position. We do not need to plot the last marker as we
    // will get it in the next leg
    var addToCoords = function(loc) {
        var latlng = new google.maps.LatLng(loc.coord.y, loc.coord.x);
        coords.push(latlng);
    }

    var plotLoc = function(loc) {
        /*
         * arrTime
         * coord [x,y]
         * depTime
         * name
         */
        var latlng = new google.maps.LatLng(loc.coord.y, loc.coord.x);

        if ( loc.name ) {
            marker = new google.maps.Marker({
                position: latlng,
                map: map,
                zIndex: 4,
                icon: "http://labs.google.com/ridefinder/images/mm_20_red.png"
            });
            registerMarker(marker, { loc: loc });
        }
        coords.push(latlng);
    };

    var createXHR = function() {
        var request = false;
        request = new XMLHttpRequest();
        return request;
    }

    // Public interface//{{{
    return {
        initialize: function() {
            map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

            // Click listener
            google.maps.event.addListener(map, "click", function(mEvent) {

                // Add the latest marker (end of route)
                if ( !fMarker ) {
                    fMarker = new google.maps.Marker({
                        position: fLatLng,
                        map: map,
                        zIndex:4,
                        icon: "http://www.frantic.com/favicon.ico"
                    });
                }

                var xhr = createXHR();
                xhr.open("GET", "/route?lat=" + mEvent.latLng.lat() + 
                    "&lon=" + mEvent.latLng.lng() + 
                    "&destLon=24.940303266001365" + 
                    "&destLat=60.16281419297092"
                    , true);
                xhr.onreadystatechange=function() {
                    if (xhr.readyState == 4) {
                        if (xhr.status != 404) {
                            if ( xhr.responseText == "" ) {
                                alert("You are pretty lost, baby!");
                                return false;
                            }
                            var myjson = JSON.parse(xhr.responseText);
                            //console.log(myjson[0]);
                            // TODO only first result is parsed at the moment
                            iterateLegs(myjson[0]);
                        } else {
                            console.log("nothing to see here");
                        }
                    }
                }
                xhr.send(null);
            });
        }

    };//}}}
}();
