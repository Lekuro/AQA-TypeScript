// node lesson06-JS-try-catch-async-await/src/promise-all.js

import { openApiUrls } from './models/index.js';

console.log('-------- Promise.all together --------');
const responses = await Promise.all(openApiUrls.map((url) => fetch(url)));
responses.forEach((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} for URL: ${response.url}`);
    }
    const jsonData = response.json();
    console.log('-------- response --------');
    console.log(response);
    console.log('-------- response.status --------');
    console.log(response.status);
    console.log('-------- response.url --------');
    console.log(response.url);
    console.log('-------- response.ok --------');
    console.log(response.ok);
    console.log('-------- jsonData --------');
    console.log(jsonData);
});

console.log('-------- Promise.all separately --------');
const [posts, products, vendors] = await Promise.all([fetch(openApiUrls[0]), fetch(openApiUrls[1]), fetch(openApiUrls[2])]);
console.log('-------- posts --------');
console.log(posts);
console.log('-------- products --------');
console.log(products);
console.log('-------- vendors --------');
console.log(vendors);
