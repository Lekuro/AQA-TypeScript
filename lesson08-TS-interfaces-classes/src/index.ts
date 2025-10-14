import { ApiUsersDto } from './models/index';

async function getApiUser(): Promise<ApiUsersDto> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const jsonData = await response.json();
    return jsonData;
}
(async () => {
    const user = await getApiUser();
    console.log(user);
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    // const jsonData = await response.json();
    // console.log(jsonData);
    // return jsonData;
})();
