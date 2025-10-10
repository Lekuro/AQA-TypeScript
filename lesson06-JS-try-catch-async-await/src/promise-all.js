// node lesson06-JS-try-catch-async-await/src/promise-all.js

import { openApiUrls } from './models/index.js';

async function getApiPromise(url) {
    return await fetch(url);
}

const arrayOfOpenApiPromises = openApiUrls.map((url) => getApiPromise(url));
console.log(arrayOfOpenApiPromises);
console.log(openApiUrls);
const arrayOfOpenApiPromisesResponse = await Promise.all(arrayOfOpenApiPromises)
    .then((responses) => {
        responses.forEach((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} for URL: ${response.url}`);
            }
            console.log('-------- response --------');
            console.log(response.json());
            console.log('-------- response.status --------');
            console.log(response.status);
            console.log('-------- response.url --------');
            console.log(response.url);
            console.log('-------- response.ok --------');
            console.log(response.ok);
        });
        return responses.json();
    })
    .catch((error) => {
        console.log('-------- error --------');
        console.log(error);
    })
    .finally(() => {
        console.log('-------- finally --------');
    });
console.log(arrayOfOpenApiPromisesResponse);
