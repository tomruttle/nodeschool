var http = require('http');

module.exports = function (url, callback) {

	http.get(url, function (response) {
		response.setEncoding("utf8");

		response.on("error", function (error) {
			return callback(error);
		});

		var responsevalue = [];
		response.on("data", function (data) {
			responsevalue.push(data);
		});

		response.on("end", function (end) {
			return callback(null, responsevalue);
		});
	});
}