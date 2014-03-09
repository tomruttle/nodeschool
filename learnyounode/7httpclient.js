var httpget = require('./7httpclient-module');

var url = process.argv[2];

httpget(url, function (err, data) {
	if (err) {
		return console.error(err);
	}
	data.forEach(function (line) {
		console.log(line);		
	});

});

