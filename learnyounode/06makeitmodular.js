var dirname = process.argv[2];
var extension = process.argv[3];
var readmodule = require('./06makeitmodular-module');

if (!dirname || !extension) {
	return;
}

readmodule(dirname, extension, function(err, data) {
	if (err) {
		console.log(err);
	}
	data.forEach(function(item) {
		console.log(item)
	});
});
