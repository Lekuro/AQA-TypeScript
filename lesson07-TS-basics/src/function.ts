// node lesson07-TS-basics/src/function.js

function getSumOfArrayValues(arr: number[] | string[]): number | string | void {
    try {
        if (!Array.isArray(arr)) throw new Error('Array expected');

        if (
            arr.some(
                (value) =>
                    typeof value === 'object' ||
                    typeof value === 'undefined' ||
                    typeof value === 'boolean' ||
                    typeof value === 'symbol' ||
                    typeof value === 'function'
            )
        ) {
            throw new Error('Array contains other types of values than numbers or strings');
        } else if (arr.some((value) => typeof value === 'string')) {
            return arr.reduce((acc, value) => `${acc}${value}`, '');
        } else if (arr.every((value) => typeof value === 'number')) {
            return arr.reduce((acc, value) => acc + value, 0);
        }
    } catch (error: any) {
        console.error(`Error-message: ${error.message},\nError-status: ${error.status}`);
    }
}

function getSumOfArrayValuesGeneric<T>(arr: T): number | string | void {
    try {
        if (!Array.isArray(arr)) throw new Error('Array expected');

        if (
            arr.some(
                (value) =>
                    typeof value === 'object' ||
                    typeof value === 'undefined' ||
                    typeof value === 'boolean' ||
                    typeof value === 'symbol' ||
                    typeof value === 'function'
            )
        ) {
            throw new Error('Array contains other types of values than numbers or strings');
        } else if (arr.some((value) => typeof value === 'string')) {
            return arr.reduce((acc, value) => `${acc}${value}`, '');
        } else if (arr.every((value) => typeof value === 'number')) {
            return arr.reduce((acc, value) => acc + value, 0);
        }
    } catch (error: any) {
        console.error(`Error-message: ${error.message},\nError-status: ${error.status}`);
    }
}

console.log(getSumOfArrayValues([1, 2, 3, 4, 5]));
console.log(getSumOfArrayValues(['one', 'two', 'three', 'four', 'five']));
// console.log(getSumOfArrayValues([1, 2, 3, 4, '5']));
// console.log(getSumOfArrayValues('one'));
// console.log(getSumOfArrayValues([1, 2, 3, { name: 'John', age: 30 }, 5]));
// console.log(getSumOfArrayValues([1, 2, 3, [1, 2, 3], 5]));
// console.log(getSumOfArrayValues([1, 2, 3, undefined, 5]));
// console.log(getSumOfArrayValues([1, 2, 3, null, 5]));
// console.log(getSumOfArrayValues([1, 2, 3, false, 5]));
// console.log(getSumOfArrayValues([1, 2, 3, Symbol('test'), 5]));
// console.log(getSumOfArrayValues([1, 2, 3, () => console.log('test'), 5]));

console.log('-------- Generic function --------');
const arrayNumbers = [1, 2, 3, 4, 5];
const arrayStrings = ['one', 'two', 'three', 'four', 'five'];
console.log(getSumOfArrayValuesGeneric<number[]>(arrayNumbers));
console.log(getSumOfArrayValuesGeneric<string[]>(arrayStrings));
console.log(getSumOfArrayValuesGeneric([1, 2, 3, 4, '5']));
console.log(getSumOfArrayValuesGeneric('one'));
console.log(getSumOfArrayValuesGeneric([1, 2, 3, { name: 'John', age: 30 }, 5]));
console.log(getSumOfArrayValuesGeneric([1, 2, 3, [1, 2, 3], 5]));
console.log(getSumOfArrayValuesGeneric([1, 2, 3, undefined, 5]));
console.log(getSumOfArrayValuesGeneric([1, 2, 3, null, 5]));
console.log(getSumOfArrayValuesGeneric([1, 2, 3, false, 5]));
console.log(getSumOfArrayValuesGeneric([1, 2, 3, Symbol('test'), 5]));
console.log(getSumOfArrayValuesGeneric([1, 2, 3, () => console.log('test'), 5]));
console.log(getSumOfArrayValuesGeneric<null[]>([null]));
console.log(getSumOfArrayValuesGeneric<undefined[]>([undefined]));
console.log(getSumOfArrayValuesGeneric<boolean[]>([true, false]));
console.log(getSumOfArrayValuesGeneric<symbol[]>([Symbol('test'), Symbol(2)]));
