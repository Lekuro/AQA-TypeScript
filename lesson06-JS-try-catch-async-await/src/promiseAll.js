// node lesson06-JS-try-catch-async-await/src/promiseAll.js 
const openApiUrls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://api.predic8.de/shop/v2/products/1',
    'https://api.predic8.de/shop/v2/vendors/1',
    'https://api.predic8.de/shop/v2/orders/1',
    'https://api.predic8.de/shop/v2/customers/1',
    'https://api.predic8.de/dlp/fields',
    'http://example.com/articles/1',
    'http://example.com/people/1',
    'http://example.com/comments/1',
    'http://example.com/articles/1/author',
    'http://example.com/articles/1/comments'
];

// Use Promise.all to fetch all URLs
Promise.all(
    openApiUrls.map((url) =>
        fetch(url).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} for ${url}`);
            }
            return response.json();
        })
    )
)
    .then((dataArray) => {
        dataArray.forEach((response) => {
            console.log('-------- response --------');
            console.log(response);
            console.log('-------- response.status --------');
            console.log(response.status);
            console.log('-------- response.url --------');
            console.log(response.url);
            console.log('-------- response.ok --------');
            console.log(response.ok);
        });
        console.log('All API responses:', dataArray);
    })
    .catch((error) => {
        console.error('Error in one of the API calls:', error);
    });
