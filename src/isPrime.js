/**
 * Takes an argument and returns a boolean whether the number is true of false
 * @param {number} num The number to check
 * @returns {boolean} is number prime or not
 * 
 * e.g isPrime(5) returns true
 */

function isPrime (num) {
  let root = Math.sqrt(num).toPrecision(3); // Get root of number to 2 d.p
  
  let isPrime = false;

  for (let i = 2; i < num; i++) {
    // Continue looping only if i is less than the root
    if (i < root) {
      if (num % i == 0) {
        // If the number is divisible by any other number, break, and return false
        isPrime = false;
        break;
      } else {
        isPrime = true;
      }
    }
  }
  return isPrime;
}

module.exports = isPrime;