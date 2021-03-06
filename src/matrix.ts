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

export class Matrix {
    readonly n_columns: number;
    readonly n_rows: number;
    private values: Float64Array;

    constructor(n_columns: number, n_rows?: number, unit?: boolean) {
        if (n_columns <= 0) {
            throw new Error(`Invalid argument: ${n_columns} <= 0`);
        }

        if (n_rows === undefined) {
            n_rows = n_columns;
        }

        if (n_rows <= 0) {
            throw new Error(`Invalid argument: ${n_columns} <= 0`);
        }

        if (unit && n_columns !== n_rows) {
            throw new Error(`Unit matrix is only possible for square matrices: ${n_columns} !== ${n_rows}`);
        }

        this.n_columns = n_columns;
        this.n_rows = n_rows;

        this.values = new Float64Array(this.n_columns * this.n_rows);

        // Float64Array is initialized with zeros, so we only have to set the diagonal to 1.0
        if (unit) {
            for (let i = 0; i < this.n_columns; i++) {
                let index = this.get_index(i, i);
                this.values[index] = 1.0;
            }
        }
    }

    private validate_index(column: number, row: number) {
        if (column < 0 || column > this.n_columns) {
            throw new Error(`Invalid column: 0 <= ${column} < ${this.n_columns}`);
        }
        if (row < 0 || row > this.n_rows) {
            throw new Error(`Invalid row: 0 <= ${row} < ${this.n_rows}`);
        }
    }

    private get_index(column: number, row: number) {
        return this.n_rows * column + row;
    }

    get(column: number, row: number): number {
        this.validate_index(column, row);
        return this.values[this.get_index(column, row)]
    }

    get_unchecked(column: number, row: number): number {
        return this.values[this.get_index(column, row)];
    }

    set(column: number, row: number, value: number) {
        this.validate_index(column, row);
        this.values[this.get_index(column, row)] = value;
    }

    set_unchecked(column: number, row: number, value: number) {
        this.values[this.get_index(column, row)] = value;
    }
}