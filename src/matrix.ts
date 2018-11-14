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

    constructor(n_columns: number, n_rows: number) {
        if (n_columns <= 0) {
            throw new Error(`Invalid argument: ${n_columns} <= 0`);
        }

        if (n_rows <= 0) {
            throw new Error(`Invalid argument: ${n_columns} <= 0`);
        }

        this.n_columns = n_columns;
        this.n_rows = n_rows;

        this.values = new Float64Array(this.n_columns * this.n_rows);
        for (let i = 0; i < this.n_columns * this.n_rows; i++) {
            this.values[i] = 0.0;
        }
    }

    private validate_index(column: number, row: number) {
        if (column < 0 || column > this.n_columns) {
            throw new Error(`Invalid column: + <= ${column} < ${this.n_columns}`);
        }
        if (row < 0 || row > this.n_rows) {
            throw new Error(`Invalid row: + <= ${row} < ${this.n_rows}`);
        }
    }

    private get_index(column: number, row: number) {
        return this.n_rows * column + row;
    }

    get(column: number, row: number): number {
        this.validate_index(column, row);
        return this.values[this.get_index(column, row)]
    }

    set(column: number, row: number, value: number) {
        this.validate_index(column, row);
        this.values[this.get_index(column, row)] = value;
    }
}