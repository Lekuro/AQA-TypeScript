type ID = string | number; // explicit typing
// type User = { name: string; age: number }; // explicit typing

const userId: ID = 123; // explicit typing
// let user1: User = { name: 'Nick', age: 20 }; // explicit typing
// user1 = { name: 'John', age: 30 };
console.log(userId);

// Generic type for a pair of values
type Pair<T> = [T, T];

// Usage of the generic Pair type
const numPair: Pair<number> = [10, 20];
console.log(numPair[0]); // Output: 10
console.log(numPair[1]); // Output: 20

const strPair: Pair<string> = ['Hello', 'World'];
console.log(strPair[0]); // Output: Hello
console.log(strPair[1]); // Output: World

// Generic type for records implicit typing
type MyRecord2<T> = Record<string, T>;

// Using the generic type MyRecord
const numberRecord2: MyRecord2<number> = { a: 1, b: 2, c: 3 };
console.log(numberRecord2.a); // Output: 1

const stringRecord2: MyRecord<string> = { name: 'John', age: '25', city: 'New York' };
console.log(stringRecord2.age); // Output: 25
