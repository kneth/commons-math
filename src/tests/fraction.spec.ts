// Copyright 2019 Kenneth Geisshirt
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
import { Fraction } from '../fraction';

describe('Fraction', function () {

    it('should construct a fraction', function () {
        let f1 = new Fraction(1, 3);
        expect(f1.numerator).to.equals(1);
        expect(f1.denominator).to.equals(3);
        expect(f1.toString()).to.equals('1 / 3');

        let f2 = new Fraction(5, 10);
        expect(f2.numerator).to.equals(1);
        expect(f2.denominator).to.equals(2);
        expect(f2.toString()).to.equals('1 / 2');

        let f3 = new Fraction(15, 21);
        expect(f3.numerator).to.equals(5);
        expect(f3.denominator).to.equals(7);
        expect(f3.toString()).to.equals('5 / 7');

        let f4 = new Fraction(7, 7);
        expect(f4.numerator).to.equals(1);
        expect(f4.denominator).to.equals(1);
        expect(f4.toString()).to.equals('1');
    });

    it('should be able to add', function () {
        let f1 = new Fraction(1, 3);
        let f2 = new Fraction(2, 5);

        let f3 = f1.add(f2);
        expect(f3.numerator).to.equals(11);
        expect(f3.denominator).to.equals(15);
    });

    it('should be able to subtract', function () {
        let f1 = new Fraction(2, 3);
        let f2 = new Fraction(1, 5);

        let f3 = f1.sub(f2);
        expect(f3.numerator).to.equals(7);
        expect(f3.denominator).to.equals(15);
    });

    it('should be able to multiply', function () {
        let f1 = new Fraction(2, 3);
        let f2 = new Fraction(1, 5);

        let f3 = f1.mul(f2);
        expect(f3.numerator).to.equals(2);
        expect(f3.denominator).to.equals(15);
    });

    it('should be able to divide', function () {
        let f1 = new Fraction(2, 3);
        let f2 = new Fraction(1, 5);

        let f3 = f1.div(f2);
        expect(f3.numerator).to.equals(10);
        expect(f3.denominator).to.equals(3);
    });

    it('should be able to find reciprocal', function () {
        let f1 = new Fraction(2, 3);

        let f2 = f1.reciprocal();
        expect(f2.numerator).to.equals(3);
        expect(f2.denominator).to.equals(2);
    });
});