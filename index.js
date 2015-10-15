'use strict';
var Filter = require('broccoli-filter');
var regenerator = require('regenerator');

function RegeneratorFilter(inputTree, options) {
	if (!(this instanceof RegeneratorFilter)) {
		return new RegeneratorFilter(inputTree, options);
	}

	Filter.call(this, inputTree);

	this.inputTree = inputTree;
	this.options = options;
}

RegeneratorFilter.prototype = Object.create(Filter.prototype);
RegeneratorFilter.prototype.constructor = RegeneratorFilter;

RegeneratorFilter.prototype.extensions = ['js'];
RegeneratorFilter.prototype.targetExtension = 'js';

RegeneratorFilter.prototype.processString = function (str) {
	return regenerator.compile(str, this.options).code;
};

module.exports = RegeneratorFilter;
