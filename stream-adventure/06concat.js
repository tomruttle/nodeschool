var through = require('through');
var split = require('split');
var concatStream = require('concat-stream');

process.stdin
    .pipe(through(write, end))
    .pipe(process.stdout);

function write (buf) {
	this.queue(buf.toString());
}

function end () {
	this.emit("hello");
	// this.emit(concatStream(function (text) {
		// text.split("").reverse().join("");
	// }));
}