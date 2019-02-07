const assert = require('chai').assert;
const expect = require('chai').expect;
const palindrome = require('../../index').isPalindrome;
const toRoman = require('../../index').toRoman;
const fromRoman = require('../../index').fromRoman;

describe('Check palindrome', () => {
  it('should return true', () => {
    assert.equal(palindrome('nurses run'), true);
  });

  it('should return false', () => {
    assert.equal(palindrome('myname'), false);
  });
});

describe('Convert to Roman', () => {
  it('57 should return LVII', () => {
    assert.equal(toRoman(57), 'LVII');
  });
  it('XCVII should return 97', () => {
    expect(fromRoman('XCVII')).to.equal(97);
  });
});