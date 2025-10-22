import {
    ApiPostsDto,
    ApiTodosDto,
    ApiUsersDto,
    ApiUserPostTodosDto,
    ApiUserWithPostsAndTodosDto,
    ApiUserAddressDto,
    ApiUserCompanyDto
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

export class ApiUserClass {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: ApiUserAddressDto;
    public phone: string;
    public website: string;
    public company: ApiUserCompanyDto;

    public constructor(user: ApiUsersDto) {
        this.id = user.id;
        this.name = user.name;
        this.username = user.username;
        this.email = user.email;
        this.address = user.address;
        this.phone = user.phone;
        this.website = user.website;
        this.company = user.company;
    }
    // public constructor(
    //     id: number,
    //     name: string,
    //     username: string,
    //     email: string,
    //     address: ApiUserAddressDto,
    //     phone: string,
    //     website: string,
    //     company: ApiUserCompanyDto
    // ) {
    //     this.id = id;
    //     this.name = name;
    //     this.username = username;
    //     this.email = email;
    //     this.address = address;
    //     this.phone = phone;
    //     this.website = website;
    //     this.company = company;
    // }
}

// OCP - Open/Closed Principle
// Open to extension, closed to modification
export class ApiUserWithPostsAndTodos extends ApiUserClass implements ApiUserWithPostsAndTodosDto {
    private static postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
    private static todoUrl = 'https://jsonplaceholder.typicode.com/todos?userId=';

    public posts?: ApiPostsDto[];
    public todos?: ApiTodosDto[];

    public constructor(user: ApiUsersDto) {
        super(user);
    }

    public async getPosts(): Promise<void> {
        try {
            const response = await fetch(ApiUserWithPostsAndTodos.postUrl + this.id);
            const jsonData = await response.json();
            this.posts = jsonData as ApiPostsDto[];
        } catch (error) {
            console.log('Error loading posts:', error);
        }
    }

    public async getTodos(): Promise<void> {
        try {
            const response = await fetch(ApiUserWithPostsAndTodos.todoUrl + this.id);
            const jsonData = await response.json();
            this.todos = jsonData as ApiTodosDto[];
        } catch (error) {
            console.log('Error loading todos:', error);
        }
    }
}
