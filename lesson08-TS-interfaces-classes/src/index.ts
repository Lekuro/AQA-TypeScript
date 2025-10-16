import {
    ApiUserWithPostClassDto,
    ApiUsersDto,
    ApiUserClassDto,
    ApiTodosDto,
    ApiPostsDto,
    api1user,
    api1posts,
    api1todos
} from './models/index';
import { Parallelogram, Kite, Rhombus, Rectangle, Square } from './implementation/quadrangle';

async function getApiObjectDataGeneric<T>(url: string, id: number): Promise<T> {
    const response = await fetch(`${url}/${id}`);
    const jsonData = await response.json();
    return jsonData as T;
}
async function getApiObjectsDataGeneric<T>(url: string): Promise<T[]> {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData as T[];
}

async function getApiUserDataByClass(id: number): Promise<ApiUserClassDto> {
    const response = await fetch(`${api1user}/${id}`);
    const jsonData = await response.json();
    return jsonData as ApiUserClassDto;
}

async function getApiUsersDataByClass(): Promise<ApiUserClassDto[]> {
    const response = await fetch(api1user);
    const jsonData = await response.json();
    return jsonData as ApiUserClassDto[];
}

function getApiUserWithPostsByClass(user: ApiUserClassDto): ApiUserWithPostClassDto {
    const userWithPost = new ApiUserWithPostClassDto(user as unknown as Record<string, unknown>);
    return userWithPost as ApiUserWithPostClassDto;
}

// (async () => {
//     const user = await getApiObjectDataGeneric<ApiUsersDto>(api1user, 3);
//     console.log('-------- user --------\n', user);
//     const users = await getApiObjectsDataGeneric<ApiUsersDto>(api1user);
//     console.log('-------- users --------\n', users);
//     const posts = await getApiObjectsDataGeneric<ApiPostsDto>(api1posts);
//     console.log('-------- posts --------\n', posts);
//     const todos = await getApiObjectsDataGeneric<ApiTodosDto>(api1todos);
//     console.log('-------- todos --------\n', todos);
//     const userFromClass = await getApiUserDataByClass(1);
//     console.log('-------- user from class dto --------\n', userFromClass);
//     const usersFromClass = await getApiUsersDataByClass();
//     console.log('-------- users from class dto --------\n', usersFromClass);
//     const userWithPost = getApiUserWithPostsByClass(userFromClass);
//     await userWithPost.getPosts();
//     console.log('-------- user with posts from class dto --------\n', userWithPost);
// })();

const square = new Square(4);
square.print();
const rectangle = new Rectangle(1, 4);
rectangle.print();
const kite = new Kite(4, 2, 30, 90, 150);
kite.print();
const rhombus = new Rhombus(4, 80, 100);
rhombus.print();
const parallelogram = new Parallelogram(4, 2, 30, 150);
parallelogram.print();
