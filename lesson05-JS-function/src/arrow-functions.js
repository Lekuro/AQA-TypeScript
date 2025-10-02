// node lesson05-JS-function/src/arrow-functions.js
const getSumOfArrayValues = (array) => {
    try {
        if (!Array.isArray(array)) {
            throw new Error('The data is not an array');
        }
    } catch (error) {
        return `Error-message: ${error.message}, Error-status: ${error.status}`;
    }
    try {
        if (array.some((value) => typeof value === 'object')) {
            throw new Error('Array contains objects');
        } else if (array.some((value) => typeof value === 'string')) {
            return array.reduce((acc, value) => acc + value, '');
        } else if (array.every((value) => typeof value === 'number')) {
            return array.reduce((acc, value) => acc + value, 0);
        }
    } catch (error) {
        return `Error-message: ${error.message}, Error-status: ${error.status}`;
    }
};
console.log(getSumOfArrayValues([1, 2, 3, 4, 5]));
const arrayNumbers = [1, 2, 3, 4, 5];
const arrayStrings = ['one', 'two', 'three', 'four', 'five'];
const arrayMixed = [1, 'two', true, ['one', 2, false], null, undefined, { one: 1, two: 2, three: 3 }];
console.log(getSumOfArrayValues(arrayNumbers, arrayStrings));
console.log(getSumOfArrayValues(arrayStrings, arrayNumbers));
console.log(getSumOfArrayValues([...arrayNumbers, ...arrayStrings]));
console.log(getSumOfArrayValues(...arrayNumbers, ...arrayStrings));
console.log(getSumOfArrayValues([...arrayMixed]));
