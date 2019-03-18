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

export class Fraction {
    readonly numerator: number;
    readonly denominator: number;

    constructor(numerator: number, denominator: number) {
        let d = this._gcd(numerator, denominator);
        this.numerator = numerator / d;
        this.denominator = denominator / d;
    }

    private _gcd(a: number, b: number): number {
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    /**
     * Adds fractions
     * @param f - a fraction
     * @returns the result
     */
    public add(f: Fraction) : Fraction {
        let n = this.denominator * f.numerator + f.denominator * this.numerator;
        let d = this.denominator * f.denominator;
        return new Fraction(n, d);
    }

    /**
     * Subtracts fractions
     * @param f - a fraction
     * @returns the result
     */
    public sub(f: Fraction) : Fraction {
        let n = this.numerator * f.denominator - f.numerator * this.denominator;
        let d = this.denominator * f.denominator;
        return new Fraction(n, d);

    }
    /**
     * Multiplies fractions
     * @param f - a fraction
     * @returns the result
     */
    public mul(f: Fraction) : Fraction {
        let n = this.numerator * f.numerator;
        let d = this.denominator * f.denominator;
        return new Fraction(n, d);
    }

    /**
     * Divides fractions
     * @param f - a fraction
     * @returns the result
     */
    public div(f: Fraction) : Fraction {
        let n = this.numerator * f.denominator;
        let d = this.denominator * f.numerator;
        return new Fraction(n, d);
    }

    /**
     * Reciprocal of fraction
     * @returns the result
     */
    public reciprocal() : Fraction {
        return new Fraction(this.denominator, this.numerator);
    }

    public toString() : string {
        if (this.denominator === 1) {
            return `${this.numerator}`;
        }
        return `${this.numerator} / ${this.denominator}`
    }
}