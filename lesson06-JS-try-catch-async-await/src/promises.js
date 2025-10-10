// node lesson06-JS-try-catch-async-await/src/promises.js

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
    api3ArticlesComments
} from './models/index.js';

function getApiData(openApi) {
    return fetch(openApi)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} for URL: ${response.url}`);
            }
            console.log('-------- response --------');
            console.log(response);
            console.log('-------- response.ok --------');
            console.log(response.ok);
            console.log('-------- response.status --------');
            console.log(response.status);
            return response.json();
        })
        .then((jsonData) => processData(jsonData))
        .catch((error) => {
            console.log('-------- error --------');
            console.log(error);
        })
        .finally(() => console.log('-------- finally --------'));
}

function processData(jsonData) {
    console.log('-------- jsonData --------');
    console.log(jsonData);
}

getApiData(openApi);
getApiData(apiShopV2Products);
getApiData(apiShopV2Vendors);
getApiData(apiShopV2Orders);
getApiData(apiShopV2Customers);
getApiData(apiDlpFields);
getApiData(api3Articles);
getApiData(api3People);
getApiData(api3Comments);
getApiData(api3ArticlesAuthor);
getApiData(api3ArticlesComments);
