interface Someone {
    name: string;
    age: number;
    printAge(): void;
} // explicit typing

const user3: Someone = {
    name: 'Nick',
    age: 20,
    printAge() {
        console.log(this.age);
    }
}; // explicit typing
console.log(user3);

// Generic interface for objects with dynamic keys and values
interface MyInterface<T> {
    [number: string]: T;
}

// Using the generic interface MyInterface
const numberObj: MyInterface<number> = { a: 1, b: 2, c: 3 };
console.log(numberObj.a); // Output: 1

const stringObj: MyInterface<string> = { name: 'John', age: '25', city: 'New York' };
console.log(stringObj.age); // Output: 25


