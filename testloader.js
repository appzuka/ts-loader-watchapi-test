module.exports = function(source, map) {
  this.callback(null, source.replace(/World/, 'Replace'), map);
};