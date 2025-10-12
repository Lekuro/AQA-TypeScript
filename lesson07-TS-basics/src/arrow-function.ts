// node lesson07-TS-basics/src/function.ts
// npx ts-node src/arrow-function.ts

const getSumOfArrayValuesArrow = (array: number[] | string[]): number | string | void => {
    if (array.length === 0) {
        throw new Error('The array is empty');
    }

    switch (typeof array[0]) {
        case 'string':
            return array.reduce((acc, value) => `${acc as string}${value as string}`, '') as string;
        case 'number':
            return array.reduce((acc, value) => (acc as number) + (value as number), 0) as number;
        default:
            console.log(`Type: ${typeof array[0]} is not supported`);
    }
};

console.log('-------- Arrow function --------');
console.log(getSumOfArrayValuesArrow([1, 2, 3, 4, 5]));
console.log(getSumOfArrayValuesArrow(['one', 'two', 'three', 'four', 'five']));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, 4, '5']));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, { name: 'John', age: 30 }, 5]));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, [1, 2, 3], 5]));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, undefined, 5]));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, null, 5]));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, false, 5]));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, Symbol('test'), 5]));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, () => console.log('test'), 5]));
// console.log(getSumOfArrayValuesArrow<number>([1, 2, 3, 4, 5]));
// console.log(getSumOfArrayValuesArrow<string>(['one', 'two', 'three', 'four', 'five']));
// console.log(getSumOfArrayValuesArrow<null>([null]));
// console.log(getSumOfArrayValuesArrow<undefined>([undefined]));
// console.log(getSumOfArrayValuesArrow<boolean>([true, false]));
// console.log(getSumOfArrayValuesArrow<symbol>([Symbol('test'), Symbol(2)]));
// console.log(getSumOfArrayValuesArrow('one'));
