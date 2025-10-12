// node lesson07-TS-basics/src/function.ts
// npx ts-node src/generic-arrow-function.ts

const getSumOfArrayValuesArrowGeneric = <T>(array: T[]): T => {
    if (array.length === 0) {
        throw new Error('The array is empty');
    }

    switch (typeof array[0]) {
        case 'string':
            return array.reduce((acc, value) => `${acc as T}${value as T}`, '') as T;
        case 'number':
            return array.reduce((acc, value) => (acc as number) + (value as number), 0) as T;
        default:
            console.log(`Type: ${typeof array[0]} is not supported`);
            return undefined as T;
    }
};

console.log('-------- Generic Arrow function --------');
console.log(getSumOfArrayValuesArrowGeneric<number>([1, 2, 3, 4, 5]));
console.log(getSumOfArrayValuesArrowGeneric<string>(['one', 'two', 'three', 'four', 'five']));
console.log(getSumOfArrayValuesArrowGeneric<null>([null]));
console.log(getSumOfArrayValuesArrowGeneric<undefined>([undefined]));
console.log(getSumOfArrayValuesArrowGeneric<boolean>([true, false]));
console.log(getSumOfArrayValuesArrowGeneric([1, 2, 3, 4, 5]));
console.log(getSumOfArrayValuesArrowGeneric(['one', 'two', 'three', 'four', 'five']));
console.log(getSumOfArrayValuesArrowGeneric([1, 2, 3, 4, '5']));
console.log(getSumOfArrayValuesArrowGeneric([1, 2, 3, { name: 'John', age: 30 }, 5]));
console.log(getSumOfArrayValuesArrowGeneric([1, 2, 3, () => console.log('test'), 5]));
console.log(getSumOfArrayValuesArrowGeneric([1, 2, 3, [1, 2, 3], 5]));
console.log(getSumOfArrayValuesArrowGeneric([1, 2, 3, undefined, 5]));
console.log(getSumOfArrayValuesArrowGeneric([1, 2, 3, null, 5]));
console.log(getSumOfArrayValuesArrowGeneric([1, 2, 3, false, 5]));
// console.log(getSumOfArrayValuesArrowGeneric([1, 2, 3, Symbol('test'), 5]));
// console.log(getSumOfArrayValuesArrowGeneric<symbol>([Symbol('test'), Symbol(2)]));
// console.log(getSumOfArrayValuesArrowGeneric('one'));
