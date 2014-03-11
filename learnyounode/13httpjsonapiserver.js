var http = require("http");
var url = require("url");
var strftime = require("strftime");
var map = require('through2-map');
var port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {

	if (req.method == 'GET') {
		var requesturl = url.parse(req.url, true);
		if (requesturl.query.iso) {
			var query = requesturl.query.iso;

			if (requesturl.pathname == "/api/parsetime") {
				var reshour = Number(strftime('%H', new Date(query)));
				var resminute = Number(strftime('%M', new Date(query)));
				var ressecond = Number(strftime('%S', new Date(query)));
				var responsetime = { hour:reshour, minute:resminute, second:ressecond };
			} 

			if (requesturl.pathname == "/api/unixtime") {
				var resunix = new Date(query).getTime();
				var responsetime = { unixtime:resunix };
			}

		    res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(responsetime));

		}
	}

});

server.listen(port);
