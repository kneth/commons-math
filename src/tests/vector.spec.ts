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
})