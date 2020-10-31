let assert = require('chai').assert;
let StringBuilder = require('./main.js');



describe('StringBuilder', () => {

    let sb;
    beforeEach(() => {
        sb = new StringBuilder();
    })

    describe('verify parameters', () => {
        it('Should throw an exception if param is not a string', () => {
            assert.throw(() => {
                new StringBuilder(5)
            }, 'Argument must be string');
        });
    })

    describe('constructor', () => {
        it('should work properly without argument', () => {
            assert.equal('', sb.toString());
        })
        it('should work properly with argument', () => {
            sb = new StringBuilder('pesho');
            assert.equal('pesho', sb.toString())
        })
    })

    describe('append', () => {
        it('should append the given string', () => {
            sb = new StringBuilder('gosho');
            sb.append('pesho');
            assert.equal(sb.toString(), 'goshopesho');
        })
    })

    describe('prepend', () => {
        it('should prepend the given string', () => {
            sb = new StringBuilder('gosho');
            sb.prepend('pesho');
            assert.equal(sb.toString(), 'peshogosho');
        })
    })

    describe('insertAt', () => {
        it('should insert string at given index', () => {
            sb = new StringBuilder('gosho');
            sb.insertAt('pesho', 2);
            assert.equal(sb.toString(), 'gopeshosho');
        })
    })

    describe('toString', () => {
        it('should return the correct string', () => {
            sb = new StringBuilder('gosho');
            assert.equal(sb.toString(), 'gosho');

        })
    })
})