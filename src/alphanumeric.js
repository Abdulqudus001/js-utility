
function isAlphaNumeric (str, {underscore} = {underscore: true}) {
  if (underscore) {
    let regex = /^\w+$/
    return regex.test(str.toString());
  }
}

function toAlphaNumeric (str) {
  return str.replace(/[^a-z0-9]/gi, '');
}

module.exports = {isAlphaNumeric, toAlphaNumeric};