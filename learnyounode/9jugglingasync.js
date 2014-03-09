var httpget = require('./9jugglingasync-module');

var wait = function(urls, done) {
	var counter = urls.length - 2;

	var urldata = [];

	for(var i = 2; i < urls.length; i++) {
		httpget(urls[i], function (err, data) {
			if (err) {
				return console.error(err);
			}
			console.log(data.toString());

			if (--counter == 0) {
				done(data);
			}

		});

	}

};

var done = function(data) {
	console.log(data.toString());
};

wait(process.argv, done);