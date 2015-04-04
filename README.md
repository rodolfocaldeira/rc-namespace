# rodi-namespace

A utility library for quickly creating namespaces.

## Installation

The module is available in [npm](https://www.npmjs.com/package/simple-namespace), to install: 
```bash
$ npm install rodi-namespace --save
```
Also available in [Bower](http://bower.io/):
```bash
$ bower install rodi-namespace --save
```  

## Usage
```javascript
  var rodi = require('rodi-namespace'); // or window.rodi;
  var HelloWorld = rodi.namespace('my.awesome.package.HelloWorld');
  
  // the namespace is ready to use
  HelloWorld = function(world) { 
    this.world = world; 
  };
  
  // use the qualified name
  my.awesome.package.HelloWorld.prototype.sayIt = function() { 
    console.log('Hello ' + this.world); 
  };
  
  // see it in action
  var earth = new HelloWorld('Earth');
  earth.sayIt(); // Hello Earth
```

## Tests

  Run ```$ npm test```

## Release History

* 0.1.0 Initial release
* 0.1.1 Only export method if module is available
* 0.1.2 Bower support
* 0.1.3 Fixed the reference to **this**
* 0.1.4 The namespace is returned upon creation
* 0.1.5 Updated the readme file
