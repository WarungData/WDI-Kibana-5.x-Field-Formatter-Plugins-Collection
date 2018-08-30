module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'tweets-formatter',
    require: ['kibana'],
    uiExports: {
      fieldFormats: ['plugins/tweets-formatter/tweets-formatter']
    }
  });
};
