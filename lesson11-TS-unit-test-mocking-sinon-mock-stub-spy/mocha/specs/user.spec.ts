import * as sinon from 'ts-sinon';
import { faker } from '@faker-js/faker';
import { expect } from 'chai';
import { ApiUserWithPostsAndTodos, ApiUserPostsTodos, ApiUserClass, ApiPostsDto, ApiTodosDto } from '../src/models/index';

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

describe('-------- ApiUserWithPostsAndTodos unit tests --------', () => {
    let userStub: sinon.StubbedInstance<ApiUserWithPostsAndTodos>;
    beforeEach(() => {
        // Arrange
        userStub = sinon.stubConstructor(ApiUserWithPostsAndTodos, userObj);
    });

    afterEach(() => {
        sinon.default.restore();
    });

    describe('Create user', () => {
        it('user should be created', () => {
            // Assert
            expect(userStub.id).to.equal(3);
            expect(userStub.username).to.equal('Samantha');
            expect(userStub.name).to.equal('Clementine Bauch');
            expect(userStub.email).to.equal('Nathan@yesenia.net');
            expect(userStub.phone).to.equal('1-463-123-4447');
            expect(userStub.website).to.equal('ramiro.info');
            expect(userStub.company).to.deep.equal(userObj.company);
            expect(userStub.address).to.deep.equal(userObj.address);
        });
    });

    describe('Get user posts', () => {
        it('should return posts', async () => {
            // Arrange
            const mockPosts: ApiPostsDto[] = [];
            for (let i = 0; i < 10; i++) {
                mockPosts.push({
                    id: faker.number.int(),
                    title: faker.lorem.sentence(),
                    body: faker.lorem.sentences(),
                    userId: 3
                });
            }
            userStub.getPosts.resolves(mockPosts);

            // Act
            const postsReturned = await userStub.getPosts();

            // Assert
            expect(userStub.getPosts.calledOnce).to.be.true;
            expect(postsReturned).to.deep.equal(mockPosts);
        });
    });

    describe('Get user todos', () => {
        it('should return todos', async () => {
            // Arrange
            const mockTodos: ApiTodosDto[] = [];
            for (let i = 0; i < 10; i++) {
                mockTodos.push({
                    id: faker.number.int(),
                    title: faker.lorem.sentence(),
                    completed: faker.datatype.boolean(),
                    userId: 3
                });
            }
            userStub.getTodos.resolves(mockTodos);

            // Act
            const todosReturned = await userStub.getTodos();

            // Assert
            expect(userStub.getTodos.calledOnce).to.be.true;
            expect(todosReturned).to.deep.equal(mockTodos);
        });
    });
});

describe('-------- ApiUserPostsTodos unit tests --------', () => {
    let userStub: sinon.StubbedInstance<ApiUserPostsTodos>;
    beforeEach(() => {
        // Arrange
        userStub = sinon.stubConstructor(ApiUserPostsTodos, 3);
    });

    afterEach(() => {
        userStub.getUser.reset();
        sinon.default.restore();
    });

    describe('Create user', () => {
        it('user should be created', () => {
            // Assert
            expect(userStub.id).to.equal(3);
            expect(userStub.user).is.an('object').is.empty;
            expect(userStub.posts).is.an('array').is.empty;
            expect(userStub.todos).is.an('array').is.empty;
        });
    });

    describe('Get user', () => {
        it('should return user', async () => {
            // Arrange
            userStub.getUser.resolves(userObj);
            // Act
            const userReturned = await userStub.getUser();
            // Assert
            expect(userStub.getUser.calledOnce).to.be.true;
            expect(userReturned).to.deep.equal(userObj);
        });
    });

    describe('Get user posts', () => {
        it('should return posts', async () => {
            // Arrange
            const mockPosts: ApiPostsDto[] = [];
            for (let i = 0; i < 10; i++) {
                mockPosts.push({
                    id: faker.number.int(),
                    title: faker.lorem.sentence(),
                    body: faker.lorem.sentences(),
                    userId: 3
                });
            }
            userStub.getPosts.resolves(mockPosts);
            // Act
            const postsReturned = await userStub.getPosts();
            // Assert
            expect(userStub.getPosts.calledOnce).to.be.true;
            expect(postsReturned).to.deep.equal(mockPosts);
        });
    });

    describe('Get user todos', () => {
        it('should return todos', async () => {
            // Arrange
            const mockTodos: ApiTodosDto[] = [];
            for (let i = 0; i < 10; i++) {
                mockTodos.push({
                    id: faker.number.int(),
                    title: faker.lorem.sentence(),
                    completed: faker.datatype.boolean(),
                    userId: 3
                });
            }
            userStub.getTodos.resolves(mockTodos);
            // Act
            const todosReturned = await userStub.getTodos();
            // Assert
            expect(userStub.getTodos.calledOnce).to.be.true;
            expect(todosReturned).to.deep.equal(mockTodos);
        });
    });

    describe('Spy on getUser method', () => {
        it('should be called getUser method', async () => {
            // Arrange
            const user = new ApiUserPostsTodos(3);
            const spyOfGetUser = sinon.default.spy(user, 'getUser');
            // Act
            const userReturned = await user.getUser();
            // Assert
            expect(spyOfGetUser.calledOnce).to.be.true;
            expect(spyOfGetUser.calledWith()).to.be.true;
            expect(spyOfGetUser.calledOn(user)).to.be.true;
            expect(user.user).to.deep.equal(userObj);
            expect(userReturned).to.deep.equal(userObj);
            expect(spyOfGetUser.calledOnceWith()).to.be.true;
            spyOfGetUser.restore();
        });
    });
});
