var through = require('through');
var http = require('http');

var serverport = process.argv[2];

var server = http.createServer(function (req, res) {

	var tr = through(function write (buf) {
		this.queue(buf.toString().toUpperCase());
	});

    if (req.method === 'POST') {
        req.pipe(tr).pipe(res);
    }

});

server.listen(serverport);
