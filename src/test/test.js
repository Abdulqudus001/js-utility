const assert = require('chai').assert;
const palindrome = require('../../index').isPalindrome;

describe('Check palindrome', () => {
  it('should return true', () => {
    assert.equal(palindrome('nurses run'), true);
  });

  it('should return false', () => {
    assert.equal(palindrome('myname'), false);
  });
});