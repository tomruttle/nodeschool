var http = require('http');
const BufferList = require('bl')

module.exports = function (url, callback) {

	http.get(url, function (response) {
		response.setEncoding("utf8");

		response.on("error", function (error) {
			return callback(error);
		});

		var bl = new BufferList()

		response.on("data", function (data) {
			bl.append(data);
		});

		response.on("end", function (end) {
			return callback(null, bl);
		});
	});
}