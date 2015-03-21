var rodi = require('../');
var test = require('tape');

test('rodi.namespace', function(t) {
  var root = this;
  rodi.namespace('harder.faster.Better', root);

  t.notEqual(rodi.namespace, undefined, 'rodi.namespace should be defined');
  t.notEqual(root.harder, undefined, 'harder should be defined');
  t.notEqual(root.harder.faster, undefined, 'harder.faster should be defined');
  t.notEqual(root.harder.faster.Better, undefined,
      'harder.faster.Better should be defined');
  t.end();
});