let users: Record<string, { name: string; age: number }>; // explicit typing
users = {
    'Nick-20': { name: 'Nick', age: 20 },
    'John-30': { name: 'John', age: 30 }
};
users = {
    'George-40': { name: 'George', age: 40 }
};

let scores: Record<string, number> = {
    Nick: 100,
    John: 200
}; // explicit typing
scores = { George: 300 };

type UserRole = 'admin' | 'user' | 'guest';
const permissions: Record<UserRole, string[]> = {
    admin: ['read', 'write', 'delete'],
    user: ['read', 'write'],
    guest: ['read']
}; // explicit typing

console.log(users, scores, permissions);

// Generic type for records implicit typing
type MyRecord<T> = Record<string, T>;

const numberRecord: MyRecord<number> = { a: 1, b: 2, c: 3 };
console.log(numberRecord.a); // Output: 1

const stringRecord: MyRecord<string> = { name: 'John', age: '25', city: 'New York' };
console.log(stringRecord.age); // Output: 25
