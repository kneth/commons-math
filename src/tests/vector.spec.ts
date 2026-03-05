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
import { Vector } from '../vector';

describe('Vector', function () {
    it('should create vector', function () {
        const dim = 3
        let v = new Vector(dim);
        expect(v.n_dimensions).to.equals(dim);
        for (let i = 0; i < dim; i++) {
            expect(v.get(i)).to.equals(0.0);
        }
    });

    it('should throw when 0 or negative dimension', function () {
        expect(() => { new Vector(0); }).to.throw();
        expect(() => { new Vector(-1); }).to.throw();
    });

    let unchecked_list = [false, true];
    unchecked_list.forEach(unchecked => {
        it(`should get and set (unchecked = ${unchecked})`, function () {
            const dim = 3;
            let v = new Vector(dim);

            for (let i = 0; i < dim; i++) {
                if (unchecked) {
                    v.set_unchecked(i, i);
                } else {
                    v.set(i, i);
                }
            }

            for (let i = 0; i < dim; i++) {
                let value = unchecked ? v.get_unchecked(i) : v.get(i);
                expect(value).to.equals(i);
            }
        });
    });

    it('dot product', function () {
        const dim = 3;
        let v1 = new Vector(dim);
        let v2 = new Vector(dim);
        let v3 = new Vector(dim + 1);

        v1.set(1, 1.0);
        v2.set(2, 1.0);
        expect(v1.dot(v1)).to.approximately(1.0, 0.001);
        expect(v1.dot(v2)).to.approximately(0.0, 0.001);
        expect(() => { v1.dot(v3); }).to.throw();
    });
})
