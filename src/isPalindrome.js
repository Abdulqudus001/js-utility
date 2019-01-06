/**
 * 
 * @param {string} str The string to check
 * @returns {boolean} Returns boolean if str is palindrome or not 
 */

function palindrome(str) {
  let newStr = str.toString().replace(/[^a-z0-9]/gi, '');

  let arr = newStr.toLowerCase().split('');

  let reversedArr = newStr.toLowerCase().split('').reverse();

  if (reversedArr.join(',') == arr.join(',')) 
    return true;
  return false;
}

module.exports = palindrome;