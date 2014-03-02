var fs = require('fs');
var path = require('path');
var dirname = process.argv[2];
var extension = process.argv[3];

if (!dirname || !extension) {
	return;
}

fs.readdir(dirname, function(err, files) {
	for (var i=0; i<files.length; i++) {
		if (path.extname(files[i]) == extension || path.extname(files[i]) == '.' + extension) {
			console.log(files[i]);
		}
	}
});