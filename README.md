# pull-balance

Load Balancer for through pull streams.

## Usage

### balance(streams)

`streams` can be an array of through streams or a list of streams separated by a comma.

## Example

```js
var pull = require("pull-stream");
var balance = require("pull-balance");

pull(
  pull.count(20),
  balance(
    pull.map(function (d) {return "through1: " + d}),
    pull.map(function (d) {return "through2: " + d}),
    pull.map(function (d) {return "through3: " + d})
  ),
  pull.log()
)
```

## install

With [npm](https://npmjs.org) do:

```
npm install pull-balance
```

## license

MIT