const assert = require('chai').assert;
const palindrome = require('../../index').isPalindrome;

describe('Check palindrome', () => {
  it('should return the palindrome', () => {
    assert.equal(palindrome('nurses run'), true);
  })
});