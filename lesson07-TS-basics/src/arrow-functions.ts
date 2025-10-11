// node lesson07-TS-basics/src/function.ts

const getSumOfArrayValuesArrow = (array: number[] | string[]): number | string | void => {
    try {
        if (!Array.isArray(array)) {
            throw new Error('The data is not an array');
        } else if (array.every((value) => typeof value === 'string')) {
            return array.reduce((acc, value) => `${acc}${value}`, '');
        } else if (array.every((value) => typeof value === 'number')) {
            return array.reduce((acc, value) => acc + value, 0);
        } else {
            throw new Error('Array contains other types of values than numbers or strings');
        }
    } catch (error: any) {
        return `Error-message: ${error.message}, Error-status: ${error.status}`;
    }
};

console.log(getSumOfArrayValuesArrow([1, 2, 3, 4, 5]));
console.log(getSumOfArrayValuesArrow(['one', 'two', 'three', 'four', 'five']));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, 4, '5']));
// console.log(getSumOfArrayValuesArrow('one'));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, { name: 'John', age: 30 }, 5]));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, [1, 2, 3], 5]));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, undefined, 5]));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, null, 5]));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, false, 5]));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, Symbol('test'), 5]));
// console.log(getSumOfArrayValuesArrow([1, 2, 3, () => console.log('test'), 5]));
