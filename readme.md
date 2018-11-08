# Deprecated

Use Babel instead.

---

# [broccoli](https://github.com/joliss/broccoli)-regenerator [![Build Status](https://travis-ci.org/sindresorhus/broccoli-regenerator.svg?branch=master)](https://travis-ci.org/sindresorhus/broccoli-regenerator)

> Transpile ES2015 generator functions to ES5 with [Regenerator](http://facebook.github.io/regenerator/)

*Issues with the output should be reported on the Regenerator [issue tracker](https://github.com/facebook/regenerator/issues).*


## Install

```
$ npm install --save-dev broccoli-regenerator
```


## Usage

```js
var regenerator = require('broccoli-regenerator');
tree = regenerator(tree, options);
```


## API

### regenerator(tree, [options])

#### options.includeRuntime

Type: `boolean`<br>
Default: `false`

> A small runtime library (less than 1KB compressed) is required to provide the wrapGenerator function. You can install it either as a CommonJS module or as a standalone .js file, whichever you prefer.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
