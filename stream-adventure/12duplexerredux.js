var duplex = require('duplexer');

module.exports = function (counter) {
    var writeable = counter.pipe(process.stdout);
    return duplex(counter, counter);
};
