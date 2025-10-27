import * as sinon from 'ts-sinon';
import { expect } from 'chai';
import { ApiUserWithPostsAndTodos, ApiUserClass } from '../src/models/index';

describe('-------- User unit tests --------', () => {
    // let mockedUserWithPostsAndTodos: sinon.StubbedInstance<ApiUserWithPostsAndTodos>;
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

    let userStub: sinon.StubbedInstance<ApiUserWithPostsAndTodos>;
    beforeEach(() => {
        // Arrange
        // user = new ApiUserWithPostsAndTodos(userObj as ApiUsersDto);
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
            const mockPosts = [{ id: 1, title: 'Test post', body: 'Test body', userId: 3 }];
            userStub.getPosts.resolves(mockPosts);

            // Act
            const postsReturned = await userStub.getPosts();

            // Assert
            expect(userStub.getPosts.calledOnce).to.be.true;
            expect(postsReturned).to.deep.equal(mockPosts);
        });
    });
});
