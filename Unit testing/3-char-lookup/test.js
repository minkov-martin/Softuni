const assert = require('chai').assert;
const lookupChar = require('./main');


describe('lookupChar', () => {
    it('Should return undefined if first parameter is not a string', () => {
        let result = lookupChar(1, 1);
        assert.equal(result, undefined);
        result = lookupChar({}, 1);
        assert.equal(result, undefined);
    })
    it('Should return undefined if second parameter is not an integer', () => {
        let result = lookupChar('test', 'test');
        assert.equal(result, undefined);

        result = lookupChar('test', 1.1);
        assert.equal(result, undefined);

        result = lookupChar('test', {});
        assert.equal(result, undefined);
    })

    it('Should return \'Incorrect index\' if index is out of range', () => {
        let result = lookupChar('test', -1);
        assert.equal(result, 'Incorrect index');

        result = lookupChar('test', 4);
        assert.equal(result, 'Incorrect index');
    })

    it('Should return char at specified index', () => {
        let result = lookupChar('test', 0);
        assert.equal(result, 't');

        result = lookupChar('test', 2);
        assert.equal(result, 's');

        result = lookupChar('test', 3);
        assert.equal(result, 't');

    })
})