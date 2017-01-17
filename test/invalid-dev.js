var readInstalled = require("../read-installed.js")
var test = require("tap").test
var path = require("path")

test("invalid dev", function(t) {
  readInstalled(
    path.join(__dirname, "fixtures/invalid-dev"),
    {
      log: console.error,
      dev: true
    },
    function (err, map) {
      t.ifError(err, "read-installed made it")
      t.ok(map.dependencies.d.invalid, "d is invalid, it doesn't match the requested version")
      t.end()
    })
})
