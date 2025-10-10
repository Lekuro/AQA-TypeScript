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

(async () => {
    try {
        await getApiData(api1user);
        await getApiData(api1posts);
        await getApiData(api1todos);
        await getApiData(apiShopV2Products);
        await getApiData(apiShopV2Vendors);
        await getApiData(apiShopV2Orders);
        await getApiData(apiShopV2Customers);
        await getApiData(apiDlpFields);
        await getApiData(api3Articles);
        await getApiData(api3People);
        await getApiData(api3Comments);
        await getApiData(api4genres);
        await getApiData(api4stories);
    } catch (error) {
        console.log('-------- error separately calls --------');
        console.log(error);
    }
})();

openApiUrls.forEach(async (url) => {
    try {
        await getApiData(url);
    } catch (error) {
        console.log('-------- error together calls --------');
        console.log(error);
    }
});
