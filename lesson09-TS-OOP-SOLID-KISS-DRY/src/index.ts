import { ApiUserPostsTodos, ApiUserWithPostsAndTodos, ApiUserWithShortPostAndTodosDto } from './models/index';
import { College, Teacher, Student, Classroom, Lesson, Intern, Inspection } from './implementation/index';
import { Level } from './abstraction/index';
import { University } from './implementation/university';

function printFullUser(user: ApiUserPostsTodos): void {
    console.log('-------- user --------\n', user);
}

function getUserWithShortInfo(user: ApiUserPostsTodos): ApiUserWithShortPostAndTodosDto {
    const posts = user.posts.map((post) => post.title);
    const todos = user.todos.map((todo) => todo.title);
    return { id: user.id, username: user.user.username, posts: posts, todos: todos };
}

(async () => {
    const user1 = new ApiUserPostsTodos(3);
    await user1.getUser();
    await user1.getPosts();
    await user1.getTodos();
    printFullUser(user1);
    const user = new ApiUserWithPostsAndTodos(user1.user);
    await user.getPosts();
    await user.getTodos();
    console.log('-------- user with posts and todos --------\n', user);
    const shortUser1 = getUserWithShortInfo(user1);
    console.log('-------- user with short info --------\n', shortUser1);
})();

const student1 = new Student('John', 20, { country: 'USA', city: 'Texas' }, Level.junior);
const student2 = new Student('Jane', 21, { country: 'Ukraine', city: 'Kyiv' }, Level.senior);
const student3 = new Student('Jack', 19, { country: 'Germany', city: 'Berlin' }, Level.sophomore);
const student4 = new Student('Jill', 18, { country: 'France', city: 'Paris' }, Level.freshman);
const studentIntern = new Intern('John', 21, { country: 'USA', city: 'New York' }, 'Math');
const mathTeacher = new Teacher('Mike', 40, 'Math', 10);
const englishTeacher = new Teacher('Mary', 35, 'English', 8);
const coach = new Teacher('Bob', 45, 'Coach', 12);
const gym = new Classroom('Gym', 100);
const mathClass = new Classroom('Math', 30);
const englishClass = new Classroom('English', 25);
const lesson1 = new Lesson('Math', mathTeacher, [student1, student2], mathClass, new Date());
const lesson2 = new Lesson('English', englishTeacher, [student3, student4], englishClass, new Date());
const lessonTrainings = new Lesson('Gym', coach, [student1, student2, student3, student4], gym, new Date());
const college = new College('Williams College', 'USA');
college.addClassroom(gym);
college.addClassroom(mathClass);
college.addClassroom(englishClass);
college.addTeacher(mathTeacher);
college.addTeacher(englishTeacher);
college.addTeacher(coach);
college.addStudent(student1);
college.addStudent(student2);
college.addStudent(student3);
college.addStudent(student4);
college.addStudent(studentIntern);
college.addTeacher(studentIntern);
englishTeacher.makeExternalCourse();
student1.makeExternalCourse();
if (coach.bookClassroom(gym, '11:00')) {
    coach.giveLesson(lessonTrainings);
}
if (mathTeacher.bookClassroom(mathClass, '11:00')) {
    mathTeacher.giveLesson(lesson1);
}
if (englishTeacher.bookClassroom(englishClass, '9:00')) {
    englishTeacher.giveLesson(lesson2);
}
if (studentIntern.bookClassroom(mathClass, '13:00')) {
    studentIntern.giveLesson(lesson1);
}
console.log('-------- college --------\n', college);
console.log('-------- lessons --------\n', student1.lessons);
const university = new University('Johns Hopkins University', 'USA');
const universityGym = new Classroom('Gym', 200);
university.addClassroom(universityGym);
university.addStudents([student1, student2, student3, student4]);
university.addTeachers([mathTeacher, englishTeacher, coach]);
console.log('-------- university --------\n', university);
university.makeFunEvent([student1, student2, student3, coach], universityGym, '11:00');

const inspection = new Inspection();
console.log('Williams College is inspected: ', inspection.inspect(college));
console.log('Johns Hopkins University is inspected: ', inspection.inspect(university));
