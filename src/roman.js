var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

/**
 * 
 * @param {number} num The decimal number to convert
 * @returns {string} The roman numeral equivalent
 */
function toRoman (num) {
  var result = '';
  decimal.forEach( function(number, index) {
    // looping over every element of the arrays
    while ( (num % number) < num ) {
      // keep trying the same number until we need to move to a smaller one

      result += roman[index];
      // add the matching roman number to our result string

      num -= number;
      // remove the decimal value of the roman number from our number
    }
  });
  return result;
}

/**
 * 
 * @param {string} str The roman numeral to convert to decimal
 * @returns {number} The decimal number equivalent
 */

function fromRoman (str) {
  var newStr = str.toString().toUpperCase();
  var result = 0;
  decimal.forEach( function(number, index) {
    // looping over every element of the arrays
    while ( newStr.indexOf(roman[index]) === 0 ) {
      // Get first roman number from newString

      result += number;
      // add the matching decimal number to our result

      newStr = newStr.replace(roman[index], '');
      // remove the roman number from the string
    }
  });
  return result;
}

module.exports = {
  toRoman: toRoman,
  fromRoman: fromRoman
}