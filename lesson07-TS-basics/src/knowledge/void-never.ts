export function log(message: string): void {
    console.log(message);
} // explicit typing

export function throwError(message: string): never {
    throw new Error(message);
} // explicit typing

// export function add(a: number, b: number) {
//     return a + b;
// } // implicit typing

export function multiply(a: number, b: number): number {
    return a * b;
} // explicit typing

// arrow function with explicit typing
export const add = (a: number, b: number): number => a + b;

// Generic function with explicit typing
export function logAndReturn<T>(value: T): T {
    console.log(value);
    return value;
}
const text = logAndReturn<string>('Hello');
const result = logAndReturn(100);
console.log(result, text);
