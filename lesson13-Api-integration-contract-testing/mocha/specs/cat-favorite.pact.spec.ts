// import { Student, Lesson, Teacher, Classroom } from '../src/implementation/index';
// import { Level } from '../src/abstraction/index';
// import { expect } from 'chai';

// describe('-------- Student unit tests --------', () => {
//     let student: Student;
//     beforeEach(() => {
//         // Arrange
//         student = new Student('John Doe', 20, { country: 'USA', city: 'New York' }, Level.junior);
//     });
//     describe('Create student', () => {
//         it('should be created', () => {
//             // Assert
//             expect(student.id).to.equal(undefined);
//             expect(student.name).to.equal('John Doe');
//             expect(student.age).to.equal(20);
//             expect(student.address).to.deep.equal({ country: 'USA', city: 'New York' });
//             expect(student.level).to.equal(Level.junior);
//             expect(student.courses).to.deep.equal([]);
//             expect(student.lessons).to.deep.equal([]);
//         });
//     });
//     describe('takeCourse method', () => {
//         it('should return true', () => {
//             // Act
//             const result = student.takeCourse('Math');
//             // Assert
//             expect(result).to.equal(true);
//         });
//         it('courses property should contain course', () => {
//             // Act
//             student.takeCourse('Math');
//             // Assert
//             expect(student.courses).to.deep.equal(['Math']);
//         });
//     });
//     describe('attendLesson method', () => {
//         // Arrange
//         const mathTeacher = new Teacher('Mike', 40, 'Math', 10);
//         const mathClass = new Classroom('Math', 30);
//         const lesson = new Lesson('Math', mathTeacher, [student], mathClass, new Date());
//         it('should return true', () => {
//             // Act
//             const result = student.attendLesson(lesson);
//             // Assert
//             expect(result).to.equal(true);
//         });
//         it('lessons property should contain lesson', () => {
//             // Act
//             student.attendLesson(lesson);
//             // Assert
//             expect(student.lessons).to.deep.equal([lesson]);
//         });
//     });
// });
