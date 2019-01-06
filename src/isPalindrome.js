function palindrome(str) {
  let newStr = str.replace(/[^a-z0-9]/gi, '');

  let arr = newStr.toLowerCase().split('');

  let reversedArr = newStr.toLowerCase().split('').reverse();

  if (reversedArr.join(',') == arr.join(',')) 
    return true;
  return false;
}

module.exports = palindrome;