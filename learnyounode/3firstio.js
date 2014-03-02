var fs = require('fs');
var filepath = process.argv[2];

if (!filepath) return;

var readfile = fs.readFileSync(filepath).toString();
var readfilearray = readfile.split('\n');

console.log(readfilearray.length - 1);
