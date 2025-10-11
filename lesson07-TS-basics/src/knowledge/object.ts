// object
const user = {
    name: 'Nick',
    age: 20,
    courses: ['Python', 'css', 'Java'],
    address: { country: 'USA', city: 'Texas' }
}; //implicit typing
let user2: { name: string; age: number; courses: string[]; address: { country: string; city: string } }; //explicit typing
let employee: { name: string; age: number; courses: string[]; address: { country: string; city: string } } = {
    name: 'Nick',
    age: 20,
    courses: ['Python', 'css', 'Java'],
    address: { country: 'USA', city: 'Texas' }
}; //explicit typing
user2 = {
    name: 'john',
    age: 30,
    courses: ['html', 'css', 'js'],
    address: { country: 'Ukraine', city: 'Kyiv' }
};
employee = user2;
user2 = user;
console.log(user, user2, employee);

// // Generic type for objects with dynamic keys and values
// type MyObject<T> = { [key: string]: T };

// // Using the generic type MyObject
// const numberObject: MyObject<number> = { a: 1, b: 2, c: 3 };
// console.log(numberObject.a); // Output: 1

// const stringObject: MyObject<string> = { name: 'John', age: '25', city: 'New York' };
// console.log(stringObject.age); // Output: 25
