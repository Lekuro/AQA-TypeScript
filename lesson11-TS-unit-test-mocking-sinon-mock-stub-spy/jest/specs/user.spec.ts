import { jest } from '@jest/globals';
import { ApiPostsDto, ApiTodosDto, ApiUserClass, ApiUserPostsTodos, ApiUsersDto, ApiUserWithPostsAndTodos } from '../src/models/index';
import { todosOfUser3 } from '../src/data/todos-of-user3';
import { postsOfUser3 } from '../src/data/posts-of-user3';

const userObj: ApiUserClass = {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: { lat: '-68.6102', lng: '-47.0653' }
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications'
    }
};

describe('-------- Mock ApiUserPostsTodos unit tests --------', () => {
    let mockedUserPostsTodos: jest.Mocked<ApiUserPostsTodos>;

    beforeEach(() => {
        // Arrange;
        mockedUserPostsTodos = {
            getUser: jest.fn(),
            getPosts: jest.fn(),
            getTodos: jest.fn()
        } as unknown as jest.Mocked<ApiUserPostsTodos>;
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should be called getUser method', async () => {
        // Arrange
        mockedUserPostsTodos.getUser.mockResolvedValue(userObj);
        // Act
        const result = await mockedUserPostsTodos.getUser();
        // Assert
        expect(mockedUserPostsTodos.getUser).toHaveBeenCalled();
        expect(mockedUserPostsTodos.getUser).toHaveBeenCalledTimes(1);
        expect(mockedUserPostsTodos.getUser).toHaveReturnedTimes(1);
        expect(mockedUserPostsTodos.getUser).toHaveReturned();
        expect(mockedUserPostsTodos.getUser).toHaveBeenCalledWith();
        expect(result).toEqual(userObj);
    });
});

describe('-------- Spy ApiUserWithPostsAndTodos unit tests --------', () => {
    let user: ApiUserWithPostsAndTodos;
    const posts: ApiPostsDto[] = postsOfUser3;
    const todos: ApiTodosDto[] = todosOfUser3;

    beforeEach(() => {
        // Arrange
        user = new ApiUserWithPostsAndTodos(userObj as ApiUsersDto);

        jest.spyOn(user, 'getPosts');
        jest.spyOn(user, 'getTodos');
    });

    afterEach(() => {
        jest.restoreAllMocks();
        // jest.clearAllMocks();
    });

    it('should be called getPosts method', async () => {
        // Act
        await user.getPosts();
        // Assert
        expect(user.getPosts).toHaveBeenCalled();
        expect(user.getPosts).toHaveBeenCalledTimes(1);
        expect(user.getPosts).toHaveReturnedTimes(1);
        expect(user.getPosts).toHaveReturned();
        expect(user.posts).toEqual(posts);
    });

    it('should be called getTodos method', async () => {
        // Act
        await user.getTodos();
        // Assert
        expect(user.getTodos).toHaveBeenCalled();
        expect(user.getTodos).toHaveBeenCalledTimes(1);
        expect(user.getTodos).toHaveReturnedTimes(1);
        expect(user.getTodos).toHaveReturned();
        expect(user.todos).toEqual(todos);
    });
});

describe('-------- Spy ApiUserPostsTodos unit tests --------', () => {
    let user: ApiUserPostsTodos;

    beforeEach(() => {
        // Arrange
        user = new ApiUserPostsTodos(3);

        jest.spyOn(user, 'getUser');
        jest.spyOn(user, 'getPosts');
        jest.spyOn(user, 'getTodos');
    });

    afterEach(() => {
        // jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    it('should be called getUser method', async () => {
        // Act
        await user.getUser();
        // Assert
        expect(user.getUser).toHaveBeenCalled();
        expect(user.getUser).toHaveBeenCalledTimes(1);
        expect(user.getUser).toHaveReturnedTimes(1);
        expect(user.getUser).toHaveReturned();
        expect(user.user).toEqual(userObj);
    });

    it('should be called getPosts method', async () => {
        // Act
        await user.getPosts();
        // Assert
        expect(user.getPosts).toHaveBeenCalled();
        expect(user.getPosts).toHaveBeenCalledTimes(1);
        expect(user.getPosts).toHaveReturnedTimes(1);
        expect(user.getPosts).toHaveReturned();
        expect(user.posts).toEqual(postsOfUser3);
    });

    it('should be called getTodos method', async () => {
        // Act
        await user.getTodos();
        // Assert
        expect(user.getTodos).toHaveBeenCalled();
        expect(user.getTodos).toHaveBeenCalledTimes(1);
        expect(user.getTodos).toHaveReturnedTimes(1);
        expect(user.getTodos).toHaveReturned();
        expect(user.todos).toEqual(todosOfUser3);
    });
});
