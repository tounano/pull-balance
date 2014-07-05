var pull = require("pull-stream");
var _ = require("underscore");
var robin = require("pull-robin");


module.exports = pull.Through(function (read, streams) {
  var args = _.isArray(streams) ? _.union([read], streams) : [].slice.call(arguments);
  read = args.shift(); streams = args;
  var ended

  function _read(end, cb) {
    if (ended) return cb(ended);
    read(end, function (end, data) {
      if (end) { ended = true; streams = []; }
      cb(end, data);
    })
  }

  for (var i = 0; i < streams.length; ++i)
    streams[i] = streams[i](_read);

  return robin(streams);
})