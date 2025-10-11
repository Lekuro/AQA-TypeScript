// array
const numbers = [1, 2, 3]; //implicit typing
let names: string[]; //explicit typing
names = ['Nick', 'John'];
names = ['George'];
let numbers2: number[] = [1, 2, 3]; //explicit typing
numbers2 = [4, 5, 6];
// const numbersWritten: Array<string> = ['one', 'two', 'three']; //explicit typing

// tuple
let person = ['John', 25]; //implicit typing
person = [23, 'Nick'];
let person2: [string, number]; //explicit typing
person2 = ['Henry', 30];
let person3: [string, number] = ['John', 25]; //explicit typing
person3 = ['Nick', 30];
person2 = person3;

// readonly
const person4: readonly [string, number] = ['John', 25];
//person4[0] = 'Nick';
console.log(numbers, names, numbers2, person, person2, person3, person4);

// Generic type for an array of values
type ArrayOf<T> = T[];

// Usage of the generic ArrayOf type
const digits: ArrayOf<number> = [1, 2, 3, 4, 5];
console.log(digits[0]); // Output: 1

const strings: ArrayOf<string> = ['Hello', 'World'];
console.log(strings[0]); // Output: Hello
