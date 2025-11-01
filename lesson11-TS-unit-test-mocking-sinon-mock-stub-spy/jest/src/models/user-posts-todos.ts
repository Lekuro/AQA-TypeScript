import {
    ApiPostsDto,
    ApiTodosDto,
    ApiUsersDto,
    ApiUserPostTodosDto,
} from './api-object.dto';

export class ApiUserPostsTodos implements ApiUserPostTodosDto {
    private static postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
    private static todoUrl = 'https://jsonplaceholder.typicode.com/todos?userId=';
    private static userUrl = 'https://jsonplaceholder.typicode.com/users/';

    public id: number;
    public user: ApiUsersDto;
    public posts: ApiPostsDto[];
    public todos: ApiTodosDto[];

    public constructor(id: number) {
        this.id = id;
        this.user = {} as ApiUsersDto;
        this.posts = [] as ApiPostsDto[];
        this.todos = [] as ApiTodosDto[];
    }

    public async getUser(): Promise<void> {
        try {
            const response = await fetch(ApiUserPostsTodos.userUrl + this.id);
            const jsonData = await response.json();
            this.user = jsonData as ApiUsersDto;
        } catch (error) {
            console.log('Error loading user:', error);
        }
    }

    public async getPosts(): Promise<void> {
        try {
            const response = await fetch(ApiUserPostsTodos.postUrl + this.id);
            const jsonData = await response.json();
            this.posts = jsonData as ApiPostsDto[];
        } catch (error) {
            console.log('Error loading posts:', error);
        }
    }

    public async getTodos(): Promise<void> {
        try {
            const response = await fetch(ApiUserPostsTodos.todoUrl + this.id);
            const jsonData = await response.json();
            this.todos = jsonData as ApiTodosDto[];
        } catch (error) {
            console.log('Error loading todos:', error);
        }
    }
}
