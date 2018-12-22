/**
 * Replace all instance of a character in a string
 * @param {string} data The string to be operated on
 * @param {string} replace The string to be replace
 * @param {string} replaceWith The string to be replaced with
 * @returns {string} Returns the string with the replaced characters
 */

function replaceAll (data, replace, replaceWith) {
  var exp = new RegExp(replace, 'gi');
  return data.replace(exp, replaceWith);
}

module.exports = replaceAll;