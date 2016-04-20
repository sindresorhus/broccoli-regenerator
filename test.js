'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

it('should transpile ES2015 generator functions to ES5', function () {
	assert(/regeneratorRuntime/.test(fs.readFileSync('temp/fixture.js', 'utf8')));
});
