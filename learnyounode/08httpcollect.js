var httpget = require('./8httpcollect-module');

var url = process.argv[2];

httpget(url, function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log(data.length);
	console.log(data.toString());

});

