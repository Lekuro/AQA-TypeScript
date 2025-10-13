// number
const age = 25; // implicit typing
let age2: number; // explicit typing
age2 = 30;
age2 = age;
//const inf: bigint = 100n; // explicit bigint typing
console.log(age, age2);

// string
const named = 'John'; // implicit typing
let name2: string; // explicit typing
name2 = 'Nick';
name2 = named;
//let email: string = 'GJLXv@example.com';// explicit typing
console.log(named, name2);

// boolean
const isActive = true; // implicit typing
let isAdmin: boolean; // explicit typing
isAdmin = true;
isAdmin = false;
//let hasAccess: boolean = false;// explicit typing
console.log(isActive, isAdmin);

// null
const nullVar = null; // implicit typing
let nullVar2: null; // explicit typing
nullVar2 = null;
nullVar2 = nullVar;
console.log(nullVar, nullVar2);

// undefined
const undefinedVar = undefined; // implicit typing
let undefinedVar2: undefined; // explicit typing
undefinedVar2 = undefined;
undefinedVar2 = undefinedVar;
console.log(undefinedVar, undefinedVar2);

// symbol
const id = Symbol('id'); // implicit typing
let id2: symbol; // explicit typing
id2 = Symbol(3);
id2 = Symbol(undefined);
console.log(id, id2);
