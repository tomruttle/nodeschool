module.exports = function (dirname, extension, callback) {

	var fs = require('fs');
	var path = require('path');

	if (extension.lastIndexOf('.', 0 != 0)) {
		extension = '.' + extension;
	}

	fs.readdir(dirname, function (err, files) {
		if (err) {
			return callback(err);
		}

		var filesarray = [];
		for (var i=0; i<files.length; i++) {
			if (path.extname(files[i]) == extension) {
				filesarray.push(files[i]);
			}
		}
		
		callback(null, filesarray);
	});

}
