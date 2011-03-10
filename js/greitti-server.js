// Run it as node greitt-server.js username password

var http = require('http');
var sys = require("sys");
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

    if ( request.url == "/route" ) {
        /*//{{{
        var conn = http.createClient(hslClient.port, hslClient.host);
        var request = conn.request("GET", hslClient.path, { "Host": "api.reittiopas.fi" });

        var data = "";
        request.addListener("response", function(response) {
            response.addListener("data", function(chunk) {
                data += chunk;
            });
            response.addListener("end", function(chunk) {
                console.log("end");
                res.end(JSON.stringify(data));
            });
        });
        request.end();
        *///}}}
        var hslReq = http.request(hslClient, function(res) {
            res.setEncoding("utf8");
            var data = "";

            res.on("data", function(chunk) {
                data += chunk;
            }).on("end", function() {
                response.end(data);
            });

        }).on("error", function(e) {
            console.log("Request error");
        });
        hslReq.end();
    } else {
        response.end("Nothing to see here");
    }

}).listen(8080, "127.0.0.1");

console.log("Server running at 127.0.0.1");
