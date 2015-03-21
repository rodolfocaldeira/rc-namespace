var namespace = function(name, opt_root) {
  if(!name && name === '') {
    return;
  }
  opt_root = opt_root || this;
  var parts = name.split('.');
  var part = parts.shift();

  opt_root[part] = opt_root[part] || {};
  return namespace(parts.join('.'), opt_root[part]);
};

namespace('rodi.namespace');
rodi.namespace = namespace;
module.exports = rodi;
