// node lesson06-JS-try-catch-async-await/src/async-await.js

import {
    openApi,
    apiShopV2Products,
    apiShopV2Vendors,
    apiShopV2Orders,
    apiShopV2Customers,
    apiDlpFields,
    api3Articles,
    api3People,
    api3Comments,
    api3ArticlesAuthor,
    api3ArticlesComments,
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
        console.log('-------- error --------');
        console.log(error);
    }
}

(async () => {
    await getApiData(openApi);
    await getApiData(apiShopV2Products);
    await getApiData(apiShopV2Vendors);
    await getApiData(apiShopV2Orders);
    await getApiData(apiShopV2Customers);
    await getApiData(apiDlpFields);
    await getApiData(api3Articles);
    await getApiData(api3People);
    await getApiData(api3Comments);
    await getApiData(api3ArticlesAuthor);
    await getApiData(api3ArticlesComments);
})();

openApiUrls.forEach(async (url) => {
    await getApiData(url);
});
