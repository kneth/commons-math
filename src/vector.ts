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

export class Vector {
    readonly n_dimensions: number;
    private values: Float64Array;

    constructor(dimensions: number) {
        if (dimensions <= 0) {
            throw new Error(`Invalid dimensions - got ${dimensions} <= 0`);
        }
        this.n_dimensions = dimensions;

        this.values = new Float64Array(dimensions);
    }

    private validate_index(index: number) {
        if (index < 0 || index > this.n_dimensions) {
            throw new Error(`Invalid argument: must be 0 <= ${index} < ${this.n_dimensions}`);
        }
    }

    get(index: number): number {
        this.validate_index(index);
        return this.values[index];
    }

    set(index: number, value: number) {
        this.validate_index(index);
        this.values[index] = value;
    }

    get_unchecked(index: number): number {
        return this.values[index];
    }

    set_unchecked(index: number, value: number) {
        this.values[index] = value;
    }
}