import { Classroom, Teacher, Lesson, Student } from '../src/implementation/index';
import { Level } from '../src/abstraction/index';
import {} from '../src/abstraction/index';
import { expect } from 'chai';

describe('-------- Teacher unit tests --------', () => {
    let teacher: Teacher;
    beforeEach(() => {
        // Arrange
        teacher = new Teacher('John Doe', 40, 'Math', 10);
    });
    describe('Create teacher', () => {
        it('should be created', () => {
            // Assert
            expect(teacher.id).to.equal(undefined);
            expect(teacher.name).to.equal('John Doe');
            expect(teacher._age).to.equal(40);
            expect(teacher.subject).to.equal('Math');
            expect(teacher.experience).to.equal(10);
        });
    });
    describe('bookClassroom method', () => {
        it('should return true', () => {
            // Arrange
            const mathClassRoom = new Classroom('Math', 30);
            // Act
            const result = teacher.bookClassroom(mathClassRoom, '11:00');
            // Assert
            expect(result).to.equal(true);
        });
    });
    describe('giveLesson method', () => {
        // Arrange
        const mathClassRoom = new Classroom('Math', 30);
        it('should return true', () => {
            // Arrange
            const student1 = new Student('John Doe', 18, { country: 'USA', city: 'New York' }, Level.junior);
            const student2 = new Student('Jane Doe', 19, { country: 'USA', city: 'Texas' }, Level.sophomore);
            const lesson = new Lesson('Math', teacher, [student1, student2], mathClassRoom, new Date());
            // Act
            const result = teacher.giveLesson(lesson);
            // Assert
            expect(result).to.equal(true);
        });
        it('every student should attend lesson', () => {
            // Arrange
            const student1 = new Student('John Doe', 18, { country: 'USA', city: 'New York' }, Level.junior);
            const student2 = new Student('Jane Doe', 19, { country: 'USA', city: 'Texas' }, Level.sophomore);
            const lesson = new Lesson('Math', teacher, [student1, student2], mathClassRoom, new Date());
            // Act
            teacher.giveLesson(lesson);
            // Assert
            expect(student1.lessons).to.deep.equal([lesson]);
            expect(student2.lessons).to.deep.equal([lesson]);
        });
    });
});
