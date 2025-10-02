console.log('--------- Trenary operations ---------');
let number1 = 5;
let number2 = 0;
console.log('number1 = ', number1);
console.log('number2 = ', number2);
console.log('number1 > number2 ? "valueIfTrue" : "valueIfFalse" = ', number1 > number2 ? 'valueIfTrue' : 'valueIfFalse');

if (number1 > number2) {
    number1 /= 2;
} else {
    number2 *= 2;
}
console.log(`if (number1 > number2) {
    number1 /= 2;
} else {
    number2 *= 2;
}, number1 = ${number1}, number2 = ${number2}`);

if (number1 || (number2 && true)) {
    console.log('number1 || (number2 && true) = ', number1 || (number2 && true));
} else if ((number1 || number2) && true) {
    console.log('((number1 || number2) && true) = ', (number1 || number2) && true);
} else {
    console.log('hahaha');
}
