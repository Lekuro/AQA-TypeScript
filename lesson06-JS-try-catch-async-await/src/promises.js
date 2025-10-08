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

function getApiData(openApi) {
    return fetch(openApi)
        .then((response) => {
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
            console.log(error.error);
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
