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
        const response = await fetch('http://all.api.radio-browser.info/json/servers');
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
    }
}

function printError(error, msg) {
    console.log('-------- error from ' + msg + ' --------');
    console.log(error);
}

const separateCallsResult = [];
(async () => {
    try {
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
    } catch (error) {
        printError(error, 'separately calls');
        separateCallsResult.push(await getApiData('http://all.api.radio-browser.info/json/servers'));
        console.log('after try to request second resource from separately calls');
    }
})();

const result = [];
(async () => {
    try {
        let i = 0;
        while (i < openApiUrls.length) {
            result.push(await getApiData(openApiUrls[i]));
            i++;
        }
    } catch (error) {
        printError(error, 'while loop');
    }
})();

const jsonResult = openApiUrls.map(async (url) => {
    try {
        return await getApiData(url);
    } catch (error) {
        printError(error, 'map loop');
        const someJson = getApiData('http://all.api.radio-browser.info/json/servers');
        console.log('after try to request second resource from a map loop');
        console.log(someJson);
        return someJson;
    }
});

setTimeout(() => console.log('-------- result --------\n', result), 3000);
setTimeout(() => console.log('-------- separateCallsResult --------\n', separateCallsResult), 3000);
setTimeout(() => console.log('-------- jsonResult --------\n', jsonResult), 3000);
