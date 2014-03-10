var httpget = require('./9jugglingasync-module');

var wait = function(urls, done) {

	var counter = urls.length;
	var urldata = [];
	for(var i = 0; i < urls.length; i++) {

		httpget(urls[i], function (err, data) {

			if (err) {
				return console.error(err);
			}

			urldata.push(data);

			if (--counter == 0) {
				done(urldata, urls);
			}
		});

	}

};

var done = function(data, urls) {
	urls.forEach(function (url) {
		data.forEach(function (item) {
			var itemurl = item.split(" ")[0];
			if (url == itemurl) {
				console.log(item.slice(itemurl.length + 1));
			}
		})
	})
};

process.argv.splice(0,2);
wait(process.argv, done);