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

/**
 * This is a representation of complex numbers.
 */
export class Complex {
    readonly re: number;
    readonly im: number;

    constructor(re: number, im: number) {
        this.re = re;
        this.im = im;
    }

    /**
     * Returns the conjugate
     *
     */
    conj(): Complex {
        return new Complex(this.re, -this.im);
    }

    /**
     * Adds a complex number to this number.
     *
     * @param z - a complex number
     * @returns the result
     */
    add(z: Complex): Complex {
        return new Complex(this.re + z.re, this.im + z.im);
    }

    /**
     * Subtracts a complex number from this number.
     *
     * @param z - a complex number
     * @returns the result
     */
    sub(z: Complex): Complex {
        return new Complex(this.re - z.re, this.im - z.im);
    }

    /**
     * Multiply complex numbers
     *
     * @param z - a complex number
     * @returns the result
     */
    mul(z: Complex): Complex {
        let result_re = this.re * z.re - this.im * z.im;
        let result_im = this.re * z.im + this.im * z.re;
        return new Complex(result_re, result_im);
    }

    /**
     * Divide complex numbers
     *
     * @param z - a complex number
     * @returns the results
     */
    div(z: Complex): Complex {
        let d = this.re * this.re + this.im * this.im;
        if (d === 0.0) {
            throw new Error('Division by zero');
        }

        let re = (this.re * z.re + z.im * this.im) / d;
        let im = (z.im * this.re - z.re * this.im) / d;

        return new Complex(re, im);
    }

}