var through = require('through')(write);
var tr = require('trumpet')();

var ws = tr.select('.loud').createStream();
ws.pipe(through).pipe(ws);
function write (buf) {
  this.queue(buf.toString().toUpperCase());
}

process.stdin.pipe(tr).pipe(process.stdout);
