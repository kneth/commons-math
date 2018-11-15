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
import { Matrix } from '../Matrix';

describe('Matrix', function () {

    it('should create matrix', function () {
        const columns = 2;
        const rows = 3;
        let m = new Matrix(columns, rows);

        expect(m.n_columns).to.equals(columns);
        expect(m.n_rows).to.equals(rows);
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                expect(m.get(i, j)).to.equals(0.0);
            }
        }
    });

    it('should create square matrix', function () {
        const columns = 2;
        let m = new Matrix(columns);

        expect(m.n_columns).to.equals(columns);
        expect(m.n_rows).to.equals(columns);
    });

    it('should create unit matrix', function () {
        const columns = 2;
        const rows = 2;
        let m = new Matrix(columns, rows, true);

        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                expect(m.get(i, j)).to.equals((i === j)?1.0:0.0);
            }
        }
    });

    it('should throw creating unit matrix if not square', function () {
        expect(() => { new Matrix(2, 3, true)}).to.throw();
    });

    it('should throw for invalid dimensions', function () {
        // 0 is not valid
        expect(() => { new Matrix(0, 1) }).to.throw();
        expect(() => { new Matrix(1, 0) }).to.throw();

        // negative numbers are invalid
        expect(() => { new Matrix(-1, 1) }).to.throw();
        expect(() => { new Matrix(1, -1) }).to.throw();
    });

    let unchecked_list = [false, true];
    unchecked_list.forEach(unchecked => {
        it(`should set and get (unchecked = ${unchecked})`, function () {
            const columns = 2;
            const rows = 3;
            let m = new Matrix(columns, rows);

            // first set all elements
            for (let i = 0; i < columns; i++) {
                for (let j = 0; j < rows; j++) {
                    if (unchecked) {
                        m.set_unchecked(i, j, i * j);
                    } else {
                        m.set(i, j, i * j);
                    }
                }
            }

            // new get the elements
            for (let i = 0; i < columns; i++) {
                for (let j = 0; j < rows; j++) {
                    let value = unchecked?m.get_unchecked(i, j):m.get(i, j);
                    expect(value).to.equals(i * j);
                }
            }
        });
    });

    it('should throw for invalid indices', function () {
        const columns = 2;
        const rows = 3;
        let m = new Matrix(columns, rows);

        expect(() => { m.set(-1, 1, 0.0); }).to.throw();
        expect(() => { m.set(1, -1, 0.0); }).to.throw();

        expect(() => { m.set(columns + 1, 1, 0.0); }).to.throw();
        expect(() => { m.set(1, rows + 1, 0.0); }).to.throw();

        expect(() => { m.get(-1, 1); }).to.throw();
        expect(() => { m.get(1, -1); }).to.throw();

        expect(() => { m.get(columns + 1, 1); }).to.throw();
        expect(() => { m.get(1, rows + 1); }).to.throw();
    });
});