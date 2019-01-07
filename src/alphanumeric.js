/**
 * 
 * @param {string} str The string to test
 * @param {object} underscore A boolean object to enable/disable underscore
 * @returns {boolean} Boolean value
 * 
 * example: isAlphaNumeric('numeric123_', {underscore: false}); // returns false
 */
function isAlphaNumeric (str, underscore ) {
  var isUnderscore = underscore == undefined ? true : underscore.underscore;
  var regex = '';
  if (isUnderscore) {
    regex = /^\w+$/;
    return regex.test(str.toString());
  } else {
    regex = /^[a-z0-9]+$/i;
    return regex.test(str.toString());
  }
}

/**
 * 
 * @param {string} str The string to convert
 * @returns {string} The replaced string
 * 
 * toAlphaNumeric('numeric123_+123'); // returns 'numeric123_123'
 */
function toAlphaNumeric (str) {
  return str.replace(/[^a-z0-9_]/gi, '');
}

module.exports = {
  isAlphaNumeric: isAlphaNumeric, 
  toAlphaNumeric: toAlphaNumeric
};