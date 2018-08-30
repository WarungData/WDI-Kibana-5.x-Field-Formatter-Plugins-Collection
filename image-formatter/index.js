module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'image-formatter',
    require: ['kibana'],
    uiExports: {
      fieldFormats: ['plugins/image-formatter/image-formatter']
    }
  });
};
