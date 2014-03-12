var readInstalled = require('../read-installed.js')
var test = require('tap').test
var path = require('path');

test("make sure that bundled deps are not marked as extra", function(t) {
  // npm#4573
  readInstalled(
    path.join(__dirname, 'fixtures/bundled-deps'),
    { log: console.error },
    function(err, map) {
      t.notOk(map.dependencies.foo.extraneous)
      t.end()
    })
})
