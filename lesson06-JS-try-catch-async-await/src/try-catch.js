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
separateCallsResult.push(getApiData(api1user).then());
separateCallsResult.push(getApiData(api1posts).then());
separateCallsResult.push(getApiData(api1todos).then());
separateCallsResult.push(getApiData(apiShopV2Products).then());
separateCallsResult.push(getApiData(apiShopV2Vendors).then());
separateCallsResult.push(getApiData(apiShopV2Orders).then());
separateCallsResult.push(getApiData(apiShopV2Customers).then());
separateCallsResult.push(getApiData(apiDlpFields).then());
separateCallsResult.push(getApiData(api3Articles).then());
separateCallsResult.push(getApiData(api3People).then());
separateCallsResult.push(getApiData(api3Comments).then());
separateCallsResult.push(getApiData(api4genres).then());
separateCallsResult.push(getApiData(api4stories).then());

const result = [];
(async () => {
    let i = 0;
    while (i < openApiUrls.length) {
        result.push(await getApiData(openApiUrls[i]));
        i++;
    }
})();

const jsonResult = openApiUrls.map(async (url) => await getApiData(url));

setTimeout(() => console.log('-------- result --------\n', result), 3000);
setTimeout(() => console.log('-------- separateCallsResult --------\n', separateCallsResult), 3000);
setTimeout(() => console.log('-------- jsonResult --------\n', jsonResult), 3000);
