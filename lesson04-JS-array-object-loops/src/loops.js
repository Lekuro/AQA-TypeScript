//node lesson04-JS-array-object-loops/src/loops.js
console.log('---------  For loop from 0 to 9 step 1 ---------');
for (let i = 0; i < 10; i++) {
    process.stdout.write(`${i} `);
}
console.log('\n---------  While loop from 0 to 9 step 1 --------- ');
let i = 0;
while (i < 10) {
    process.stdout.write(`${i} `);
    i++;
}
console.log('\n---------  Do while loop from 0 to 9 step 1 --------- ');
i = 0;
do {
    process.stdout.write(`${i} `);
    i++;
} while (i < 10);
console.log('\n---------  For loop from 100 to 0 step 10 --------- ');
for (let i = 100; i >= 0; i -= 10) {
    process.stdout.write(`${i} `);
}
console.log('\n---------  While loop from 100 to 0 step 10 --------- ');
i = 100;
while (i >=0) {
    process.stdout.write(`${i} `);
    i -= 10;
}
console.log('\n---------  Do while loop from 100 to 0 step 10 --------- ');
i = 100;
do {
    process.stdout.write(`${i} `);
    i -= 10;
} while (i >= 0);