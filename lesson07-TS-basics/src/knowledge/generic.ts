// Generic function with explicit typing
export function logAndReturn<T>(value: T): T {
    console.log(value);
    return value;
}
const text = logAndReturn<string>('Hello');
const result = logAndReturn(100);
console.log(result, text);

// Generic type with explicit typing
export type Pair<T> = [T, T];

const numPair: Pair<number> = [10, 20];
console.log(numPair[0]); // Output: 10
console.log(numPair[1]); // Output: 20

// Generic type for records with dynamic keys and values
type MyRecord<T> = Record<string, T>;

// Using the generic type MyRecord
const numberRecord: MyRecord<number> = { a: 1, b: 2, c: 3 };
console.log(numberRecord.a); // Output: 1

const stringRecord: MyRecord<string> = { name: 'John', age: '25', city: 'New York' };
console.log(stringRecord.age); // Output: 25

const strPair: Pair<string> = ['Hello', 'World'];
console.log(strPair[0]); // Output: Hello
console.log(strPair[1]); // Output: World
