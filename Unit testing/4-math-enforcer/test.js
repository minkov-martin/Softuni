const assert = require('chai').assert;
const mathEnforcer = require('./main');


describe('mathEnforcer', () => {

    describe('addFive', () => {
        it('should return undefined if the parameter is not a number', () => {
            let result = mathEnforcer.addFive('5');
            assert.equal(result, undefined);

            result = mathEnforcer.addFive({});
            assert.equal(result, undefined);
        })

        it('should return correct result with number parameter', () => {
            let result = mathEnforcer.addFive(5);
            assert.equal(result, 10);

            result = mathEnforcer.addFive(-5);
            assert.equal(result, 0);

            result = mathEnforcer.addFive(-0.5);
            assert.closeTo(result, 4.5, 0.01);

        })
    })

    describe('subtractTen', () => {
        it('should return undefined if the parameter is not a number', () => {
            let result = mathEnforcer.subtractTen('5');
            assert.equal(result, undefined);

            result = mathEnforcer.subtractTen({});
            assert.equal(result, undefined);
        })

        it('should return correct result with number parameter', () => {
            let result = mathEnforcer.subtractTen(20);
            assert.equal(result, 10);

            result = mathEnforcer.subtractTen(-5);
            assert.equal(result, -15);

            result = mathEnforcer.subtractTen(-0.5);
            assert.closeTo(result, -10.5, 0.01);
        })
    })

    describe('sum', () => {
        it('should return undefined if the first parameter is not a number', () => {
            let result = mathEnforcer.sum('5', 5);
            assert.equal(result, undefined);

            result = mathEnforcer.sum({}, 5);
            assert.equal(result, undefined);
        })
        it('should return undefined if the second parameter is not a number', () => {
            let result = mathEnforcer.sum(5, '5');
            assert.equal(result, undefined);

            result = mathEnforcer.sum(5, {});
            assert.equal(result, undefined);
        })

        it('should return correct value with number parameters', () => {
            let result = mathEnforcer.sum(5, 5);
            assert.equal(result, 10);

            result = mathEnforcer.sum(-5, -10);
            assert.equal(result, -15);

            result = mathEnforcer.sum(0.5, 0.6);
            assert.closeTo(result, 1.1, 0.01);
        })
    })


})