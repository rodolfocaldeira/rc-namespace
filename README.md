# rodi-namespace

A utility library for quickly creating namespaces.

## Installation

The module is available in [npm](https://www.npmjs.com/package/simple-namespace), to install: 
```bash
$ npm install rc-namespace --save
```
Also available in [Bower](http://bower.io/):
```bash
$ bower install rc-namespace --save
```  

## Usage

  var rc = require('rc-namespace');
  rc.namespace('my.awesome.package.HelloWorld');

## Tests

  Run ```$ npm test```

## Release History

* 0.1.0 Initial release
* 0.1.1 Only export method if module is available
* 0.1.2 Bower support
* 0.1.3 Fixed the reference to **this**
* 0.1.4 The namespace is returned upon creation
* 0.1.5 Updated the readme file
