var self = this;

var namespace = function(name, opt_root) {
  if(!name && name === '') {
    return opt_root;
  }
  opt_root = opt_root || self;
  var parts = name.split('.');
  var part = parts.shift();

  opt_root[part] = opt_root[part] || {};
  return namespace(parts.join('.'), opt_root[part]);
};

namespace('rc.namespace', self);
self.rc.namespace = namespace;

if (typeof module !== 'undefined') {
  module.exports = self.rc;
}
