var fs = require('fs');
var filepath = process.argv[2];

if (!filepath) return;

var readfile = fs.readFile(filepath, 'utf8', function(err, data) {
	console.log(data.split('\n').length -1);n
});
