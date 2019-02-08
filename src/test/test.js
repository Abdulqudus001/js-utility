const assert = require('chai').assert;
const expect = require('chai').expect;
const palindrome = require('../../index').isPalindrome;
const toRoman = require('../../index').toRoman;
const fromRoman = require('../../index').fromRoman;
const isAlphaNumeric = require('../../index').isAlphaNumeric;
const toAlphaNumeric = require('../../index').toAlphaNumeric;

describe('Check palindrome', () => {
  it('"nurses run" should return true', () => {
    assert.equal(palindrome('nurses run'), true);
  });

  it('"myname" should return false', () => {
    assert.equal(palindrome('myname'), false);
  });
});

describe('Convert to Roman', () => {
  it('57 should return LVII', () => {
    assert.equal(toRoman(57), 'LVII');
  });
  it('97 should return XCVII', () => {
    expect(toRoman(97)).to.equal('XCVII');
  });
});

describe('Convert from roman', () => {
  it('XCVII should return 97', () => {
    expect(fromRoman('XCVII')).to.equal(97);
  });

  it('CMVII should return 907', () => {
    expect(fromRoman('CMVII')).to.equal(907);
  });
});


describe('Check if string is alphanumeric', () => {
  it('Abdulqudus123 should return true', () => {
    assert.equal(isAlphaNumeric('Abdulqudus123'), true);
  });

  it('Abdulqudus123_ with underscore disabled should return false', () => {
    assert.equal(isAlphaNumeric('Abdulqudus123_', {
      underscore: false
    }), false);
  });

  it('Abdulqudus123_ with underscore enabled should return true', () => {
    assert.equal(isAlphaNumeric('Abdulqudus123_', {
      underscore: true
    }), true);
  });
});