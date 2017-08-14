const chai = require('chai');
const assert = chai.assert;

const countVowel = require('../countVowel');

describe('countVowel', function() {
  it('should count the number of vowels', function() {
    assert.equal(countVowel('winter is coming'), 5);
  });
  it('should count the number of vowels', function() {
    assert.equal(countVowel('wwwtttppp'), 0);
  });
  it('should return -1 if value is not a string', function() {
    assert.equal(countVowel([1,2,3]), -1);
  });
});
