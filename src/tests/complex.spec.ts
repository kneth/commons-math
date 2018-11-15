// Copyright 2018 Kenneth Geisshirt
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import 'mocha';
import { expect } from 'chai';
import { Complex } from '../complex';

describe('Complex numbers', function () {

    it('should construct a complex number', function () {
        let z1 = new Complex(1, 2);
        expect(z1.re).to.equals(1);
        expect(z1.im).to.equals(2);

        let z2 = new Complex(1);
        expect(z2.re).to.equals(1);
        expect(z2.im).to.equals(0);
    });

    it('should compute the modulus', function () {
        let z = new Complex(1, 2);
        expect(z.mod()).to.approximately(Math.sqrt(5), 0.00001);
    });

    it('should compute the conjugate', function () {
        let z1 = new Complex(1, 2);
        let z2 = z1.conj();

        expect(z2.re).to.equals(1);
        expect(z2.im).to.equals(-2);
    });

    it('should add two complex numbers', function () {
        let z1 = new Complex(1, 2);
        let z2 = new Complex(3, 4);
        let z3 = z1.add(z2);
        expect(z3.re).to.equals(4);
        expect(z3.im).to.equals(6);
    });

    it('should multiply two complex numbers', function () {
        let z1 = new Complex(1, 2);
        let z2 = new Complex(3, 4);
        let z3 = z1.mul(z2);
        expect(z3.re).to.equals(-5);
        expect(z3.im).to.equals(10);
    });

    it('should divide two complex numbers', function () {
        let z1 = new Complex(1, 2);
        let z2 = new Complex(3, 4);
        let z3 = z1.div(z2); // 11/25 + 2/25*i
        expect(z3.re).to.equals(11.0/25.0);
        expect(z3.im).to.equals(2.0/25.0);

        let z4 = new Complex(0, 0);
        expect(() => { z1.div(z4) }).to.throw();
    });

    it('square root', function () {
        let z = new Complex(1, 2);
        let [r1, r2] = z.sqrt();

        expect(r1.re).to.approximately(1.27202, 0.00001);
        expect(r1.im).to.approximately(0.78615, 0.00001);

        expect(r2.re).to.approximately(-1.27202, 0.00001);
        expect(r2.im).to.approximately(-0.78615, 0.00001);
    });

    it('polar coordinates', function () {
        let test_numbers = [
            { x: 0, y: 0, r: 0, phi: undefined },
            { x: 7, y: 0, r: 7, phi: 0.0 },
            { x: -7, y: 0, r: 7, phi: Math.PI },
            { x: 1, y: 1, r: Math.sqrt(2), phi: Math.PI / 4.0 },
            { x: 0, y: 1, r: 1, phi: Math.PI / 2.0 },
            { x: 1, y: -1, r: Math.sqrt(2), phi: -Math.PI / 4.0 },
            { x: 0, y: -1, r: 1, phi: -Math.PI / 2.0 },
            { x: -1, y: -1, r: Math.sqrt(2), phi: -3.0 * Math.PI / 4.0 },
        ];

        test_numbers.forEach(obj => {
            let z = new Complex(obj.x, obj.y);
            let [r, phi] = z.polar();
            expect(r).to.approximately(obj.r, 0.00001, JSON.stringify(obj));
            if (obj.phi === undefined) {
                expect(phi).to.be.undefined;
            } else {
                expect(phi).to.approximately(obj.phi, 0.00001, JSON.stringify(obj));
            }
        });
    });
})