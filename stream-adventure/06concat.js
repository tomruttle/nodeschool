var split = require('split');
var concatStream = require('concat-stream');
var concat = concatStream(function (text) {
	console.log(text.toString().split("").reverse().join(""));
});

process.stdin.pipe(concat)