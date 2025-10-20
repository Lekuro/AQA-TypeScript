import { ApiUserWithPostAndTodos, ApiUserWithShortPostAndTodosDto } from './models/index';

function printFullUser(user: ApiUserWithPostAndTodos): void {
    console.log('-------- user --------\n', user);
}

function getUserWithShortInfo(user: ApiUserWithPostAndTodos): ApiUserWithShortPostAndTodosDto {
    const posts = user.posts.map((post) => post.title);
    const todos = user.todos.map((todo) => todo.title);
    return { id: user.id, username: user.user.username, posts: posts, todos: todos };
}

(async () => {
    const user1 = new ApiUserWithPostAndTodos(3);
    await user1.getUser();
    await user1.getPosts();
    await user1.getTodos();
    printFullUser(user1);
    const shortUser1 = getUserWithShortInfo(user1);
    console.log('-------- user with short info --------\n', shortUser1);
})();
