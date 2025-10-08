// node lesson06-JS-try-catch-async-await/src/promises.js
const openApi = 'https://jsonplaceholder.typicode.com/posts';
const apiShopV2Products = 'https://api.predic8.de/shop/v2/products/1';
const apiShopV2Vendors = 'https://api.predic8.de/shop/v2/vendors/1';
const apiShopV2Orders = 'https://api.predic8.de/shop/v2/orders/1';
const apiShopV2Customers = 'https://api.predic8.de/shop/v2/customers/1';
const apiDlpFields = 'https://api.predic8.de/dlp/fields'; //take away 1->404 or /1->405
const api3Articles = 'http://example.com/articles/1';
const api3People = 'http://example.com/people/1';
const api3Comments = 'http://example.com/comments/1';
const api3ArticlesAuthor = 'http://example.com/articles/1/author';
const api3ArticlesComments = 'http://example.com/articles/1/comments';

async function getApiData(url) {
    try {
        const response = await fetch(url);
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
        const response = await fetch(url + '/1');
        const jsonData = await response.json();
        return jsonData;
    } finally {
        console.log('-------- finally --------');
    }
}

(async () => {
    const response = await getApiData(apiDlpFields);
})();
