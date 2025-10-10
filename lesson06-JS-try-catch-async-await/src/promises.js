// node lesson06-JS-try-catch-async-await/src/promises.js

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
    api4stories
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
    console.log('-------- jsonData under work--------');
    console.log(jsonData);
}

getApiData(api1user);
getApiData(api1posts);
getApiData(api1todos);
getApiData(apiShopV2Products);
getApiData(apiShopV2Vendors);
getApiData(apiShopV2Orders);
getApiData(apiShopV2Customers);
getApiData(apiDlpFields);
getApiData(api3Articles);
getApiData(api3People);
getApiData(api3Comments);
getApiData(api4genres);
getApiData(api4stories);
