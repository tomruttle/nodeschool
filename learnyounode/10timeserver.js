var net = require("net");
var strftime = require("strftime");
var port = process.argv[2];

var server = net.createServer(function (socket) {
	socket.end(strftime('%F %R', new Date()) + "\n");
});
server.listen(port)
