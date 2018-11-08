import 'mocha';
import { expect } from 'chai';
import { Complex } from '../complex';

describe('Complex numbers', function () {

    it('should construct a complex number', function () {
        let z = new Complex(1, 2);
        expect(z.re).to.equals(1);
        expect(z.im).to.equals(2);
    });

    it('should add two complex numbers', function () {
        let z1 = new Complex(1, 2);
        let z2 = new Complex(3, 4);
        let z3 = z1.add(z2);
        expect(z3.re).to.equals(4);
        expect(z3.im).to.equals(6);
    })
})