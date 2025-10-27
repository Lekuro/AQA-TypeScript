import * as sinon from 'ts-sinon';
import { expect } from 'chai';
import { ApiUserPostsTodos, ApiUserWithPostsAndTodos, ApiUserClass, ApiUsersDto, ApiPostsDto, ApiTodosDto } from '../src/models/index';

describe('-------- User unit tests --------', () => {
    let user: ApiUserWithPostsAndTodos;
    let posts: ApiPostsDto[];
    let todos: ApiTodosDto[];
    const mockedUserWithPostsAndTodos = sinon.stubConstructor(ApiUserWithPostsAndTodos);
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
    const userPosts: ApiPostsDto[] = [
        {
            userId: 3,
            id: 21,
            title: 'asperiores ea ipsam voluptatibus modi minima quia sint',
            body:
                'repellat aliquid praesentium dolorem quo\n' +
                'sed totam minus non itaque\n' +
                'nihil labore molestiae sunt dolor eveniet hic recusandae veniam\n' +
                'tempora et tenetur expedita sunt'
        },
        {
            userId: 3,
            id: 22,
            title: 'dolor sint quo a velit explicabo quia nam',
            body:
                'eos qui et ipsum ipsam suscipit aut\n' +
                'sed omnis non odio\n' +
                'expedita earum mollitia molestiae aut atque rem suscipit\n' +
                'nam impedit esse'
        },
        {
            userId: 3,
            id: 23,
            title: 'maxime id vitae nihil numquam',
            body:
                'veritatis unde neque eligendi\n' +
                'quae quod architecto quo neque vitae\n' +
                'est illo sit tempora doloremque fugit quod\n' +
                'et et vel beatae sequi ullam sed tenetur perspiciatis'
        },
        {
            userId: 3,
            id: 24,
            title: 'autem hic labore sunt dolores incidunt',
            body:
                'enim et ex nulla\n' +
                'omnis voluptas quia qui\n' +
                'voluptatem consequatur numquam aliquam sunt\n' +
                'totam recusandae id dignissimos aut sed asperiores deserunt'
        },
        {
            userId: 3,
            id: 25,
            title: 'rem alias distinctio quo quis',
            body:
                'ullam consequatur ut\n' +
                'omnis quis sit vel consequuntur\n' +
                'ipsa eligendi ipsum molestiae et omnis error nostrum\n' +
                'molestiae illo tempore quia et distinctio'
        },
        {
            userId: 3,
            id: 26,
            title: 'est et quae odit qui non',
            body:
                'similique esse doloribus nihil accusamus\n' +
                'omnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\n' +
                'perspiciatis cum ut laudantium\n' +
                'omnis aut molestiae vel vero'
        },
        {
            userId: 3,
            id: 27,
            title: 'quasi id et eos tenetur aut quo autem',
            body:
                'eum sed dolores ipsam sint possimus debitis occaecati\n' +
                'debitis qui qui et\n' +
                'ut placeat enim earum aut odit facilis\n' +
                'consequatur suscipit necessitatibus rerum sed inventore temporibus consequatur'
        },
        {
            userId: 3,
            id: 28,
            title: 'delectus ullam et corporis nulla voluptas sequi',
            body:
                'non et quaerat ex quae ad maiores\n' +
                'maiores recusandae totam aut blanditiis mollitia quas illo\n' +
                'ut voluptatibus voluptatem\n' +
                'similique nostrum eum'
        },
        {
            userId: 3,
            id: 29,
            title: 'iusto eius quod necessitatibus culpa ea',
            body:
                'odit magnam ut saepe sed non qui\n' +
                'tempora atque nihil\n' +
                'accusamus illum doloribus illo dolor\n' +
                'eligendi repudiandae odit magni similique sed cum maiores'
        },
        {
            userId: 3,
            id: 30,
            title: 'a quo magni similique perferendis',
            body:
                'alias dolor cumque\n' +
                'impedit blanditiis non eveniet odio maxime\n' +
                'blanditiis amet eius quis tempora quia autem rem\n' +
                'a provident perspiciatis quia'
        }
    ];
    const userTodos: ApiTodosDto[] = [
        {
            userId: 3,
            id: 41,
            title: 'aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit',
            completed: false
        },
        {
            userId: 3,
            id: 42,
            title: 'rerum perferendis error quia ut eveniet',
            completed: false
        },
        {
            userId: 3,
            id: 43,
            title: 'tempore ut sint quis recusandae',
            completed: true
        },
        {
            userId: 3,
            id: 44,
            title: 'cum debitis quis accusamus doloremque ipsa natus sapiente omnis',
            completed: true
        },
        {
            userId: 3,
            id: 45,
            title: 'velit soluta adipisci molestias reiciendis harum',
            completed: false
        },
        {
            userId: 3,
            id: 46,
            title: 'vel voluptatem repellat nihil placeat corporis',
            completed: false
        },
        {
            userId: 3,
            id: 47,
            title: 'nam qui rerum fugiat accusamus',
            completed: false
        },
        {
            userId: 3,
            id: 48,
            title: 'sit reprehenderit omnis quia',
            completed: false
        },
        {
            userId: 3,
            id: 49,
            title: 'ut necessitatibus aut maiores debitis officia blanditiis velit et',
            completed: false
        },
        {
            userId: 3,
            id: 50,
            title: 'cupiditate necessitatibus ullam aut quis dolor voluptate',
            completed: true
        },
        {
            userId: 3,
            id: 51,
            title: 'distinctio exercitationem ab doloribus',
            completed: false
        },
        {
            userId: 3,
            id: 52,
            title: 'nesciunt dolorum quis recusandae ad pariatur ratione',
            completed: false
        },
        {
            userId: 3,
            id: 53,
            title: 'qui labore est occaecati recusandae aliquid quam',
            completed: false
        },
        {
            userId: 3,
            id: 54,
            title: 'quis et est ut voluptate quam dolor',
            completed: true
        },
        {
            userId: 3,
            id: 55,
            title: 'voluptatum omnis minima qui occaecati provident nulla voluptatem ratione',
            completed: true
        },
        {
            userId: 3,
            id: 56,
            title: 'deleniti ea temporibus enim',
            completed: true
        },
        {
            userId: 3,
            id: 57,
            title: 'pariatur et magnam ea doloribus similique voluptatem rerum quia',
            completed: false
        },
        {
            userId: 3,
            id: 58,
            title: 'est dicta totam qui explicabo doloribus qui dignissimos',
            completed: false
        },
        {
            userId: 3,
            id: 59,
            title: 'perspiciatis velit id laborum placeat iusto et aliquam odio',
            completed: false
        },
        {
            userId: 3,
            id: 60,
            title: 'et sequi qui architecto ut adipisci',
            completed: true
        }
    ];
    beforeEach(() => {
        // Arrange
        user = new ApiUserWithPostsAndTodos(mockedUserWithPostsAndTodos);
        // posts = userPosts;
        // todos = userTodos;
    });
    afterEach(() => {
        mockedUserWithPostsAndTodos.getPosts.restore();
        mockedUserWithPostsAndTodos.getTodos.restore();
        sinon.default.restore();
    });
    describe('Create user', () => {
        it('should be created', () => {
            // Assert
            expect(user.id).to.equal(3);
            expect(user.username).to.equal('Samantha');
            expect(user.name).to.equal('Clementine Bauch');
            expect(user.email).to.equal('Nathan@yesenia.net');
            expect(user.phone).to.equal('1-463-123-4447');
            expect(user.website).to.equal('ramiro.info');
            expect(user.company).to.deep.equal(userObj.company);
            expect(user.address).to.deep.equal(userObj.address);
        });
    });
    describe('Get user posts', () => {
        it('should return posts', async () => {
            // Arrange

            // Act
            const result = await user.getPosts();
            // Assert
            expect(result).to.deep.equal(posts);
        });
    });
});
