// node lesson06-JS-try-catch-async-await/src/async-await.js

import {
    api1user,
    api1posts,
    api1todos,
    apiShopV2Products,
    apiShopV2Vendors,
    apiShopV2Orders,
    apiShopV2Customers,
    apiDlpFields,
    api3Articles,
    api3People,
    api3Comments,
    api4genres,
    api4stories,
    openApiUrls
} from './models/index.js';

async function getApiData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} for URL: ${response.url}`);
        }
        const jsonData = await response.json();
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
        return jsonData;
    } catch (error) {
        console.log('-------- error getApiData() --------');
        console.log(error);
    }
}

const separateCallsResult = [];
(async () => {
    separateCallsResult.push(await getApiData(api1user));
    separateCallsResult.push(await getApiData(api1posts));
    separateCallsResult.push(await getApiData(api1todos));
    separateCallsResult.push(await getApiData(apiShopV2Products));
    separateCallsResult.push(await getApiData(apiShopV2Vendors));
    separateCallsResult.push(await getApiData(apiShopV2Orders));
    separateCallsResult.push(await getApiData(apiShopV2Customers));
    separateCallsResult.push(await getApiData(apiDlpFields));
    separateCallsResult.push(await getApiData(api3Articles));
    separateCallsResult.push(await getApiData(api3People));
    separateCallsResult.push(await getApiData(api3Comments));
    separateCallsResult.push(await getApiData(api4genres));
    separateCallsResult.push(await getApiData(api4stories));
})();

const result = [];
let i = 0;
while (i < openApiUrls.length) {
    result.push(getApiData(openApiUrls[i]).then());
    i++;
}

const jsonResult = openApiUrls.map(async (url) => await getApiData(url));

setTimeout(() => console.log('-------- result --------\n', result), 2000);
setTimeout(() => console.log('-------- separateCallsResult --------\n', separateCallsResult), 2000);
setTimeout(() => console.log('-------- jsonResult --------\n', jsonResult), 2000);
