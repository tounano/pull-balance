var pull = require("pull-stream");
var balance = require("../");

pull(
  pull.count(20),
  balance(
    pull.map(function (d) {return "through1: " + d}),
    pull.map(function (d) {return "through2: " + d}),
    pull.map(function (d) {return "through3: " + d})
  ),
  pull.log()
)
