var through = require('through');
var ws = require('websocket-stream');
var wsstream = ws('ws://localhost:8000');

var stream = through().queue("hello\n").pipe(wsstream).end();