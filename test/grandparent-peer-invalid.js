var readInstalled = require('../read-installed.js')
var test = require('tap').test
var path = require('path');

test('unsatisfied peer dependencies leave error data', function(t) {
	readInstalled(
		path.join(__dirname, 'fixtures/grandparent-peer-invalid'),
		{ log: console.error },
		function(err, map) {
			t.match(map.dependencies.framework.peerInvalid, ['plugin-wrapper@0.0.0->plugin@0.0.0'], 'dependency framework of ' + map.name + ' is peerInvalid with data on breaking peerdependency')
			t.end()
		})
})
