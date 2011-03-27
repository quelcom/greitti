// Run as "node greitt-server.js username password"

var http = require('http');
var sys = require("sys");
var fs = require("fs");
var querystring = require("querystring");

if ( !process.argv[2] || !process.argv[3] ) {
    throw "No auth provided";
    system.exit(1);
}

var hslClient = {
    host: 'api.reittiopas.fi',
    port: 80,
    path: '/hsl/prod/?request=stats&user=' + process.argv[2] + '&pass=' + process.argv[3],
    method: 'GET'
};

http.createServer(function(request, response) {
    var index = request.url.indexOf("?") + 1;
    var queryParams = querystring.parse(request.url.substring(index));
    console.log(queryParams);

    // Serve the js file
    if ( request.url == "/gr") {
        fs.readFile("greitti.js", function(err,data) {
            if ( err ) {
                next (err);
                return;
            }
            response.writeHead(200, {'Content-Type': 'text/javascript'});
            response.write(data);
            response.end();
        });
    } else if ( request.url.match('^/route') ) {
        // Fetches data from HSL api and return as json
        hslClient.path = '/hsl/prod/?request=route&user=' + process.argv[2] + '&pass=' + process.argv[3] + '&show=1&epsg_in=4326&epsg_out=4326&from=' + queryParams.lon + ',' + queryParams.lat + '&to=24.940303266001365,60.16281419297092';
        var hslReq = http.request(hslClient, function(res) {
            console.log(hslClient.path);
            res.setEncoding("utf8");
            var data = "";

            res.on("data", function(chunk) {
                data += chunk;
            }).on("end", function() {
                console.log(data);
                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.write(data);
                response.end();
            });

        }).on("error", function(e) {
            console.log("Request error");
        });
        hslReq.end();

    } else {
        // Serve the index page
        fs.readFile("../index.html", function(err,data) {
            if ( err ) {
                next (err);
                return;
            }
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        });
    }
}).listen(8080, "127.0.0.1");

console.log("Server running at 127.0.0.1:8080");
