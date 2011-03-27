/*
 * Greitti module
 * Author: Josep Roca
 *
 */
var Greitti = function() {

// var response {{{//{{{
// mocking the data at the moment
    var response = 
[[{"length":11776.345,"duration":2940,"legs":[{"length":418,"duration":330.42,"type":"walk","locs":[{"coord":{"x":24.9405638416,"y":60.162613421},"arrTime":"201102131821","depTime":"201102131821","name":null},{"coord":{"x":24.9441528797,"y":60.1641658961},"arrTime":"201102131825","depTime":"201102131825","name":"Erottajankatu"},{"coord":{"x":24.9438457676,"y":60.1652649543},"arrTime":"201102131827","depTime":"201102131827","name":"Kolmikulma"}]},{"length":718,"duration":300,"type":"2","code":"1010  1","locs":[{"coord":{"x":24.9438457676,"y":60.1652649543},"arrTime":"201102131827","depTime":"201102131827","name":"Kolmikulma"},{"coord":{"x":24.9411547976,"y":60.1681653897},"arrTime":"201102131829","depTime":"201102131829","name":"Ylioppilastalo"},{"coord":{"x":24.9375306965,"y":60.1705786871},"arrTime":"201102131832","depTime":"201102131832","name":"Lasipalatsi"}]},{"length":234,"duration":201.06,"type":"walk","locs":[{"coord":{"x":24.9375306965,"y":60.1705786871},"arrTime":"201102131832","depTime":"201102131832","name":"Lasipalatsi"},{"coord":{"x":24.9373491014,"y":60.1707810338},"arrTime":"201102131832","depTime":"201102131832","name":null},{"coord":{"x":24.9376307216,"y":60.1708014827},"arrTime":"201102131832","depTime":"201102131832","name":null},{"coord":{"x":24.9376184852,"y":60.1708778654},"arrTime":"201102131832","depTime":"201102131832","name":"Postikatu"},{"coord":{"x":24.9389832898,"y":60.1709777147},"arrTime":"201102131833","depTime":"201102131833","name":null},{"coord":{"x":24.9389572102,"y":60.1710739428},"arrTime":"201102131834","depTime":"201102131834","name":null},{"coord":{"x":24.9391702099,"y":60.1710885911},"arrTime":"201102131834","depTime":"201102131834","name":null},{"coord":{"x":24.939131881,"y":60.1711974725},"arrTime":"201102131834","depTime":"201102131834","name":null},{"coord":{"x":24.9392585699,"y":60.1712809497},"arrTime":"201102131834","depTime":"201102131834","name":"Elielinaukio"},{"coord":{"x":24.9390914579,"y":60.1717381151},"arrTime":"201102131835","depTime":"201102131835","name":null},{"coord":{"x":24.9390054093,"y":60.1717530862},"arrTime":"201102131835","depTime":"201102131840","name":"Elielinaukio"}]},{"length":9754,"duration":1320,"type":"5","code":"2270  1","locs":[{"coord":{"x":24.9390054093,"y":60.1717530862},"arrTime":"201102131835","depTime":"201102131840","name":"Elielinaukio"},{"coord":{"x":24.9292080414,"y":60.1788862196},"arrTime":"201102131843","depTime":"201102131843","name":"Hesperian puisto"},{"coord":{"x":24.9234523882,"y":60.1844017746},"arrTime":"201102131845","depTime":"201102131845","name":"T\u00f6\u00f6l\u00f6n kisahalli"},{"coord":{"x":24.9174069556,"y":60.189290753},"arrTime":"201102131847","depTime":"201102131847","name":"Kansanel\u00e4kelaitos"},{"coord":{"x":24.9123351931,"y":60.1916505073},"arrTime":"201102131848","depTime":"201102131848","name":"T\u00f6\u00f6l\u00f6n tulli"},{"coord":{"x":24.9022125359,"y":60.195238311},"arrTime":"201102131850","depTime":"201102131850","name":"Kuusitie"},{"coord":{"x":24.9015539592,"y":60.1981779201},"arrTime":"201102131851","depTime":"201102131851","name":"Tilkka"},{"coord":{"x":24.8992658123,"y":60.2054908794},"arrTime":"201102131852","depTime":"201102131852","name":"Ruskeasuo"},{"coord":{"x":24.8973393579,"y":60.2082505527},"arrTime":"201102131853","depTime":"201102131853","name":"Ruskeasuon varikko"},{"coord":{"x":24.8890118981,"y":60.2097696764},"arrTime":"201102131854","depTime":"201102131854","name":"Talontie"},{"coord":{"x":24.8802205229,"y":60.2141995401},"arrTime":"201102131856","depTime":"201102131856","name":"H\u00f6yl\u00e4\u00e4m\u00f6tie"},{"coord":{"x":24.8746712538,"y":60.215807008},"arrTime":"201102131857","depTime":"201102131857","name":"Valimotie"},{"coord":{"x":24.8690920121,"y":60.2176657617},"arrTime":"201102131858","depTime":"201102131858","name":"Takomotie"},{"coord":{"x":24.8630513831,"y":60.2198414334},"arrTime":"201102131859","depTime":"201102131859","name":"Talin siirt.puutarha"},{"coord":{"x":24.8627962138,"y":60.2224909706},"arrTime":"201102131859","depTime":"201102131859","name":"Takkatie"},{"coord":{"x":24.8576884573,"y":60.224507735},"arrTime":"201102131901","depTime":"201102131901","name":"Pit\u00e4j\u00e4nm\u00e4en asema"},{"coord":{"x":24.8482189831,"y":60.2246583389},"arrTime":"201102131902","depTime":"201102131902","name":"Henrikintie"}]},{"length":649,"duration":512.52,"type":"walk","locs":[{"coord":{"x":24.8482189831,"y":60.2246583389},"arrTime":"201102131902","depTime":"201102131902","name":"Henrikintie"},{"coord":{"x":24.8491998826,"y":60.2248396626},"arrTime":"201102131902","depTime":"201102131902","name":"Henrikintie"},{"coord":{"x":24.8477368907,"y":60.2256254233},"arrTime":"201102131904","depTime":"201102131904","name":"Knuutintie"},{"coord":{"x":24.848270988,"y":60.227021344},"arrTime":"201102131906","depTime":"201102131906","name":"Knuutinpolku"},{"coord":{"x":24.8484886281,"y":60.2272730717},"arrTime":"201102131907","depTime":"201102131907","name":"Lauritsantie"},{"coord":{"x":24.8494333755,"y":60.2284258102},"arrTime":"201102131909","depTime":"201102131909","name":null},{"coord":{"x":24.8496154373,"y":60.228487476},"arrTime":"201102131909","depTime":"201102131909","name":"Kokkokalliontie"},{"coord":{"x":24.8500764261,"y":60.2286577586},"arrTime":"201102131909","depTime":"201102131909","name":null},{"coord":{"x":24.8512782844,"y":60.2285163174},"arrTime":"201102131910","depTime":"201102131910","name":null}]}]}],[{"length":10559.372,"duration":2760,"legs":[{"length":1355,"duration":1161.54,"type":"walk","locs":[{"coord":{"x":24.9405638416,"y":60.162613421},"arrTime":"201102131829","depTime":"201102131829","name":null},{"coord":{"x":24.9441528797,"y":60.1641658961},"arrTime":"201102131833","depTime":"201102131833","name":"Erottajankatu"},{"coord":{"x":24.9436414663,"y":60.166620892},"arrTime":"201102131837","depTime":"201102131837","name":"Mannerheimintie"},{"coord":{"x":24.9409628774,"y":60.1685724683},"arrTime":"201102131841","depTime":"201102131841","name":"Kolmensep\u00e4naukio"},{"coord":{"x":24.940593717,"y":60.1688291092},"arrTime":"201102131842","depTime":"201102131842","name":"Mannerheimintie"},{"coord":{"x":24.940109462,"y":60.1690928484},"arrTime":"201102131842","depTime":"201102131842","name":null},{"coord":{"x":24.9405786528,"y":60.1697519514},"arrTime":"201102131843","depTime":"201102131843","name":null},{"coord":{"x":24.9405687008,"y":60.1702232632},"arrTime":"201102131844","depTime":"201102131844","name":null},{"coord":{"x":24.9403921132,"y":60.170221823},"arrTime":"201102131844","depTime":"201102131844","name":null},{"coord":{"x":24.9401123139,"y":60.1712111695},"arrTime":"201102131846","depTime":"201102131846","name":null},{"coord":{"x":24.9399901082,"y":60.1712847417},"arrTime":"201102131846","depTime":"201102131846","name":"Elielinaukio"},{"coord":{"x":24.9399672394,"y":60.1721241617},"arrTime":"201102131847","depTime":"201102131847","name":"Elielinaukio"},{"coord":{"x":24.9398762916,"y":60.1722199522},"arrTime":"201102131848","depTime":"201102131848","name":null},{"coord":{"x":24.9399535838,"y":60.1722768508},"arrTime":"201102131848","depTime":"201102131848","name":null},{"coord":{"x":24.9398976682,"y":60.1727161745},"arrTime":"201102131848","depTime":"201102131849","name":"Helsinki\/VR"}]},{"length":8091,"duration":720,"type":"12","code":"3002A 1","locs":[{"coord":{"x":24.9398976682,"y":60.1727161745},"arrTime":"201102131848","depTime":"201102131849","name":"Helsinki\/VR"},{"coord":{"x":24.9329148603,"y":60.1990382167},"arrTime":"201102131854","depTime":"201102131854","name":"Pasila\/VR"},{"coord":{"x":24.9178190181,"y":60.2092234993},"arrTime":"201102131856","depTime":"201102131856","name":"Ilmala\/VR"},{"coord":{"x":24.8933942309,"y":60.2183750664},"arrTime":"201102131858","depTime":"201102131858","name":"Huopalahti\/VR"},{"coord":{"x":24.8742004315,"y":60.2218418983},"arrTime":"201102131900","depTime":"201102131900","name":"Valimo\/VR"},{"coord":{"x":24.8604857004,"y":60.2231432543},"arrTime":"201102131901","depTime":"201102131901","name":"Pit\u00e4j\u00e4nm\u00e4ki\/VR"}]},{"length":1112,"duration":912.06,"type":"walk","locs":[{"coord":{"x":24.8604857004,"y":60.2231432543},"arrTime":"201102131901","depTime":"201102131901","name":"Pit\u00e4j\u00e4nm\u00e4ki\/VR"},{"coord":{"x":24.8605161642,"y":60.2232040926},"arrTime":"201102131901","depTime":"201102131901","name":null},{"coord":{"x":24.8577698959,"y":60.2236185997},"arrTime":"201102131903","depTime":"201102131903","name":null},{"coord":{"x":24.8580601073,"y":60.224228877},"arrTime":"201102131904","depTime":"201102131904","name":"Pit\u00e4j\u00e4nm\u00e4entie"},{"coord":{"x":24.8545392891,"y":60.224700381},"arrTime":"201102131907","depTime":"201102131907","name":"Pit\u00e4j\u00e4nm\u00e4entie"},{"coord":{"x":24.8545744958,"y":60.2248051717},"arrTime":"201102131907","depTime":"201102131907","name":null},{"coord":{"x":24.8545667063,"y":60.2249219079},"arrTime":"201102131907","depTime":"201102131907","name":null},{"coord":{"x":24.854683884,"y":60.2249175631},"arrTime":"201102131907","depTime":"201102131907","name":"Konalantie"},{"coord":{"x":24.8537612091,"y":60.2266998196},"arrTime":"201102131910","depTime":"201102131910","name":null},{"coord":{"x":24.8538930298,"y":60.2267725736},"arrTime":"201102131910","depTime":"201102131910","name":"Konalantie"},{"coord":{"x":24.849776832,"y":60.2284478469},"arrTime":"201102131915","depTime":"201102131915","name":null},{"coord":{"x":24.8496810447,"y":60.2285121885},"arrTime":"201102131915","depTime":"201102131915","name":"Kokkokalliontie"},{"coord":{"x":24.8500764261,"y":60.2286577586},"arrTime":"201102131915","depTime":"201102131915","name":null},{"coord":{"x":24.8512782844,"y":60.2285163174},"arrTime":"201102131916","depTime":"201102131916","name":null}]}]}]]//}}}//}}}

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
        zoom: 14,
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
                title: "foo",
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
                xhr.open("GET", "/route?lat=" + mEvent.latLng.lat() + "&lon=" + mEvent.latLng.lng(), true);
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
