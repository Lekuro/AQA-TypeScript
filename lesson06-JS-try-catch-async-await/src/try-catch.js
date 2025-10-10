// node lesson06-JS-try-catch-async-await/src/try-catch.js

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
        return jsonData;
    } catch (error) {
        if (error.message.includes('HTTP error! Status:')) {
            const response = await fetch('http://all.api.radio-browser.info/json/servers');
            const jsonData = await response.json();
            return jsonData;
        } else {
            throw error;
        }
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
    console.log('-------- separateCallsResult --------\n', separateCallsResult);
})();

const result = [];
(async () => {
    let i = 0;
    while (i < openApiUrls.length) {
        result.push(await getApiData(openApiUrls[i]));
        i++;
    }
    console.log('-------- result --------\n', result);
})();

const jsonResult = openApiUrls.map((url) => getApiData(url).then());
setTimeout(() => console.log('-------- jsonResult --------\n', jsonResult), 3000);
