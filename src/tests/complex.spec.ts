import 'mocha';
import { expect } from 'chai';
import { Complex } from '../complex';

describe('Complex numbers', () => {

    it('should construct a complex number', () => {
        let z = new Complex(1, 2);
        expect(z.re).to.equals(1);
        expect(z.im).to.equals(2);
    });

    it('should add two complex numbers', () => {
        let z1 = new Complex(1, 2);
        let z2 = new Complex(3, 4);
        let z3 = z1.add(z2);
        expect(z3.re).to.equals(4);
        expect(z3.im).to.equals(6);
    });

    it('should multiply two complex numbers', () => {
        let z1 = new Complex(1, 2);
        let z2 = new Complex(3, 4);
        let z3 = z1.mul(z2);
        expect(z3.re).to.equals(-5);
        expect(z3.im).to.equals(10);
    });

    it('should divide two complex numbers', () => {
        let z1 = new Complex(1, 2);
        let z2 = new Complex(3, 4);
        let z3 = z1.div(z2); // 11/25 + 2/25*i
        expect(z3.re).to.equals(11.0/25.0);
        expect(z3.im).to.equals(2.0/25.0);

        let z4 = new Complex(0, 0);
        expect(() => { z1.div(z4) }).to.throw();
    });
})