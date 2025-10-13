// node lesson07-TS-basics/src/function.js
// npx ts-node src/function.ts

function getSumOfArrayValues(arr: number[] | string[]): number | string | void {
    if (arr.length === 0) {
        throw new Error('Array is empty');
    }

    switch (typeof arr[0]) {
        case 'string':
            return arr.reduce((acc, value) => `${acc as string}${value as string}`, '') as string;
        case 'number':
            return arr.reduce((acc, value) => (acc as number) + (value as number), 0) as number;
        default:
            console.log(`Type: ${typeof arr[0]} is not supported`);
    }
}

console.log('-------- Normal function --------');
console.log(getSumOfArrayValues([1, 2, 3, 4, 5]));
console.log(getSumOfArrayValues(['one', 'two', 'three', 'four', 'five']));
// console.log(getSumOfArrayValues([1, 2, 3, 4, '5']));
// console.log(getSumOfArrayValues([1, 2, 3, { name: 'John', age: 30 }, 5]));
// console.log(getSumOfArrayValues([1, 2, 3, [1, 2, 3], 5]));
// console.log(getSumOfArrayValues([1, 2, 3, undefined, 5]));
// console.log(getSumOfArrayValues([1, 2, 3, null, 5]));
// console.log(getSumOfArrayValues([1, 2, 3, false, 5]));
// console.log(getSumOfArrayValues([1, 2, 3, Symbol('test'), 5]));
// console.log(getSumOfArrayValues([1, 2, 3, () => console.log('test'), 5]));
// console.log(getSumOfArrayValues<number>([1, 2, 3, 4, 5]));
// console.log(getSumOfArrayValues<string>(['one', 'two', 'three', 'four', 'five']));
// console.log(getSumOfArrayValues<null>([null]));
// console.log(getSumOfArrayValues<undefined>([undefined]));
// console.log(getSumOfArrayValues<boolean>([true, false]));
// console.log(getSumOfArrayValues<symbol>([Symbol('test'), Symbol(2)]));
// console.log(getSumOfArrayValues('one'));
