const yamlifyObject = require('yamlify-object');

const { lineDefaultTemplate } = require('./line');
const yamlifyObjectColors = require('yamlify-object-colors');

exports.configureFormatter = function configureFormatter({
  showData = true,
  showStracTrace = true,
  line = lineDefaultTemplate,
  yamlifyConfig,
}) {
  /**
   * @param {Object} props - object for line template to parse
   * @param {Object?} data - optional object for yamlify-object to pring below the line
   * @param {string?} stack - optional formatted stack trace
   *
   * @return {string}
   */
  return function formatter(props, data, stack) {
    let message = line(props);

    if (showStracTrace && stack) {
      message += `\n${stack}`;
    }

    if (showData && data && Object.keys(data).length !== 0) {
      message += `\n${yamlifyObject(data, yamlifyConfig)}`;
    }

    return message;
  }
};
