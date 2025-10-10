// node lesson06-JS-try-catch-async-await/src/promise-all.js

import { openApiUrls } from './models/index.js';

async function requestJsonData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} for URL: ${response.url}`);
        }
        console.log('-------- response --------');
        console.log(response);
        console.log('-------- response.ok --------');
        console.log(response.ok);
        console.log('-------- response.status --------');
        console.log(response.status);
        console.log('-------- response.url --------');
        console.log(response.url);
        return response.json();
    } catch (error) {
        console.log(`-------- error for ${url} --------`);
        console.log(error);
    }
}

(async () => {
    try {
        console.log('-------- Promise.all together --------');
        const jsonResponses = await Promise.all(openApiUrls.map((url) => requestJsonData(url)));
        console.log('-------- json of Promise.all together --------');
        jsonResponses.forEach((jsonResponse) => console.log(jsonResponse));
        //console.log(triggerError);
    } catch (error) {
        console.log('-------- error together --------');
        console.log(error);
    }
})();

(async () => {
    try {
        console.log('-------- Promise.all separately --------');
        const [user, posts, todos] = await Promise.all([
            requestJsonData(openApiUrls[0]),
            requestJsonData(openApiUrls[1]),
            requestJsonData(openApiUrls[2])
        ]);
        console.log('-------- json of Promise.all separately --------');
        console.log('-------- user --------');
        console.log(user);
        console.log('-------- posts --------');
        console.log(posts);
        console.log('-------- todos --------');
        console.log(todos);
        //console.log(triggerError);
    } catch (error) {
        console.log('-------- error separately --------');
        console.log(error);
    }
})();
