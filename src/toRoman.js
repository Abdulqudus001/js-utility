function toRoman (num) {
  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

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

module.exports = toRoman;