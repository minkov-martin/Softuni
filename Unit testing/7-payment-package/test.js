let { assert } = require('chai');
let PaymentPackage = require('./main')

describe('PaymentPackage', () => {
    describe('constructor', () => {
        it('should throw an error if name is not a string', () => {
            assert.throw(() => new PaymentPackage(5, 10), 'Name must be a non-empty string');
        })
        it('should throw an error if name is an empty string', () => {
            assert.throw(() => new PaymentPackage('', 10), 'Name must be a non-empty string');
        })
        it('should throw an error if value is not a number', () => {
            assert.throw(() => new PaymentPackage('pesho', 'gosho'), 'Value must be a non-negative number');
        })
        it('should throw an error if value is a negative number', () => {
            assert.throw(() => new PaymentPackage('pesho', -1), 'Value must be a non-negative number');
        })
        it('should return an instance', () => {
            let res = new PaymentPackage('pesho', 5);

            let expected = {
                _name: 'pesho',
                _value: 5,
                _VAT: 20,
                _active: true,
            }
            assert.deepEqual(res, expected);

        })
    })

    describe('name', () => {
        it('should return the name', () => {
            let PaymentPackageInstance = new PaymentPackage('pesho', 5);
            assert.equal(PaymentPackageInstance.name, 'pesho');
        })

        it('should throw an error if name is not a string', () => {
            let PaymentPackageInstance = new PaymentPackage('pesho', 5);
            assert.throw(() => {
                PaymentPackageInstance.name = 5
            }, 'Name must be a non-empty string');
        })
        it('should throw an error if name is an empty string', () => {
            let PaymentPackageInstance = new PaymentPackage('pesho', 5);
            assert.throw(() => {
                PaymentPackageInstance.name = 5
            }, 'Name must be a non-empty string');
        })

    })

    describe('value', () => {
        it('should return the value', () => {
            let PaymentPackageInstance = new PaymentPackage('pesho', 5);
            assert.equal(PaymentPackageInstance.value, 5);
        })
        it('should throw an error if value is not a number', () => {
            let PaymentPackageInstance = new PaymentPackage('pesho', 5);
            assert.throw(() => {
                PaymentPackageInstance.value = 'pesho'
            }, 'Value must be a non-negative number');
        })
        it('should throw an error if value is a negative number', () => {
            let PaymentPackageInstance = new PaymentPackage('pesho', 5);
            assert.throw(() => {
                PaymentPackageInstance.value = -1
            }, 'Value must be a non-negative number');
        })
    })


    describe('VAT', () => {
        it('should return the VAT', () => {
            let PaymentPackageInstance = new PaymentPackage('pesho', 5);
            assert.equal(PaymentPackageInstance.VAT, 20);
        })
    })

    describe('active', () => {
        it('should return the active', () => {
            let PaymentPackageInstance = new PaymentPackage('pesho', 5);
            assert.equal(PaymentPackageInstance.active, true);
        })
    })
    describe('VAT', () => {
        it('should throw an error if value is not a number', () => {
            let PaymentPackageInstance = new PaymentPackage('pesho', 5);
            assert.throw(() => {
                PaymentPackageInstance.VAT = 'test'
            }, 'VAT must be a non-negative number');
        })
        it('should throw an error if value is not a negative number', () => {
            let PaymentPackageInstance = new PaymentPackage('pesho', 5);
            assert.throw(() => {
                PaymentPackageInstance.VAT = -1
            }, 'VAT must be a non-negative number');
        })


    })
    describe('active', () => {
        it('should throw an error if value is not a boolean', () => {
            let PaymentPackageInstance = new PaymentPackage('pesho', 5);
            assert.throw(() => {
                PaymentPackageInstance.active = 'test'
            }, 'Active status must be a boolean');
        })
    })

    describe('toString', () => {
        it('should return a string with the instance details', () => {
            let PaymentPackageInstance = new PaymentPackage('pesho', 5);
            PaymentPackageInstance.VAT = 50;
            PaymentPackageInstance.active = false;

            let result = PaymentPackageInstance.toString();


            let expected = [
                `Package: ${PaymentPackageInstance.name}` + ' (inactive)',
                `- Value (excl. VAT): ${PaymentPackageInstance.value}`,
                `- Value (VAT ${PaymentPackageInstance.VAT}%): 7.5`
            ].join('\n');

            assert.equal(result, expected);
        })
        it('should return a string with the instance details', () => {
            let PaymentPackageInstance = new PaymentPackage('pesho', 5);
            PaymentPackageInstance.active = true;

            let result = PaymentPackageInstance.toString();


            let expected = [
                `Package: ${PaymentPackageInstance.name}`,
                `- Value (excl. VAT): ${PaymentPackageInstance.value}`,
                `- Value (VAT ${PaymentPackageInstance.VAT}%): 6`
            ].join('\n');

            assert.equal(result, expected);
        })
    })
})