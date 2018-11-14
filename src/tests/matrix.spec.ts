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

    it('should throw for invalid dimensions', function () {
        // 0 is not valid
        expect(() => { new Matrix(0, 1) }).to.throw();
        expect(() => { new Matrix(1, 0) }).to.throw();

        // negative numbers are invalid
        expect(() => { new Matrix(-1, 1) }).to.throw();
        expect(() => { new Matrix(1, -1) }).to.throw();
    });

    it('should set and get', function () {
        const columns = 2;
        const rows = 3;
        let m = new Matrix(columns, rows);

        // first set all elements
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                m.set(i, j, i * j);
            }
        }

        // new get the elements
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                expect(m.get(i, j)).to.equals(i * j);
            }
        }
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