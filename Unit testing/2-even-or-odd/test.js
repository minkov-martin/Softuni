const assert = require('chai').assert;
const isOddOrEven = require('./main');


describe('isOddOrEven', function () {
    it('Should return undefined if argument is not a string', () => {
        assert.equal(isOddOrEven(5), undefined);
        assert.equal(isOddOrEven({}), undefined);
    })
    it('Should return \'odd\' if length of string is an odd number', () => {
        assert.equal(isOddOrEven('abc'), 'odd');
    })
    it('Should return \'even\' if length of string is an even number', () => {
        assert.equal(isOddOrEven('abcd'), 'even');
    })
    it('Should return correct values with multiple consecutuve checks', () => {
        assert.equal(isOddOrEven('a'), 'odd');
        assert.equal(isOddOrEven('ab'), 'even');
        assert.equal(isOddOrEven('abc'), 'odd');
        assert.equal(isOddOrEven('abcd'), 'even');
        assert.equal(isOddOrEven('abcde'), 'odd');
    })
})