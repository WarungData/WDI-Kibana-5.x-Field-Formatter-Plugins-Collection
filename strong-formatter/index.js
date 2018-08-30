module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'strong-formatter',
    require: ['kibana'],
    uiExports: {
      fieldFormats: ['plugins/strong-formatter/strong-formatter']
    }
  });
};
