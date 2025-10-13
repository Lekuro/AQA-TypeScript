// node lesson07-TS-basics/src/function-generic.js
// npx ts-node src/function-generic.ts

function getSumOfArrayValueGeneric<T>(arr: T[]): T {
    if (arr.length === 0) {
        throw new Error('Array is empty');
    }

    switch (typeof arr[0]) {
        case 'string':
            return arr.reduce((acc, value) => `${acc as T}${value as T}`, '') as T;
        case 'number':
            return arr.reduce((acc, value) => (acc as number) + (value as number), 0) as T;
        default:
            console.log(`Type: ${typeof arr[0]} is not supported`);
            return undefined as T;
    }
}

console.log('-------- Generic function --------');
console.log(getSumOfArrayValueGeneric<number>([1, 2, 3, 4, 5]));
console.log(getSumOfArrayValueGeneric<string>(['one', 'two', 'three', 'four', 'five']));
console.log(getSumOfArrayValueGeneric<null>([null]));
console.log(getSumOfArrayValueGeneric<undefined>([undefined]));
console.log(getSumOfArrayValueGeneric<boolean>([true, false]));
console.log(getSumOfArrayValueGeneric<symbol>([Symbol('test'), Symbol(2)]));
console.log(getSumOfArrayValueGeneric([1, 2, 3, 4, '5']));
console.log(getSumOfArrayValueGeneric([1, 2, 3, () => console.log('test'), 5]));
console.log(getSumOfArrayValueGeneric([1, 2, 3, { name: 'John', age: 30 }, 5]));
console.log(getSumOfArrayValueGeneric([1, 2, 3, [1, 2, 3], 5]));
console.log(getSumOfArrayValueGeneric([1, 2, 3, undefined, 5]));
console.log(getSumOfArrayValueGeneric([1, 2, 3, null, 5]));
console.log(getSumOfArrayValueGeneric([1, 2, 3, true, 5]));
// console.log(getSumOfArrayValuesGeneric([1, 2, 3, Symbol('test'), 5]));
// console.log(getSumOfArrayValuesGeneric('one'));
