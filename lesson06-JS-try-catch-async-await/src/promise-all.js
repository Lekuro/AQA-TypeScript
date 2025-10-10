// node lesson06-JS-try-catch-async-await/src/promise-all.js

import { openApiUrls } from './models/index.js';

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

// const [users, posts, comments] = await Promise.all([
//     fetch(openApiUrls[0]),
//     fetch(openApiUrls[2]),
//     fetch(openApiUrls[3])
// ]);
// console.log('-------- users --------');
// console.log(users);
// console.log('-------- posts --------');
// console.log(posts);
// console.log('-------- comments --------');
// console.log(comments);
