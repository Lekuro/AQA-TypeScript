import { jest } from '@jest/globals';
import { University, Student, Teacher, Classroom } from '../src/implementation/index';
import { Level } from '../src/abstraction/index';

describe('-------- University unit tests --------', () => {
    let university1: University;
    let mathTeacher: Teacher;
    let student1: Student;
    let mathClassRoom: Classroom;

    beforeEach(() => {
        // Arrange
        university1 = new University('Johns Hopkins University', 'USA');
        mathTeacher = new Teacher('John Doe', 40, 'Math', 10);
        student1 = new Student('John', 20, { country: 'USA', city: 'Texas' }, Level.junior);
        mathClassRoom = new Classroom('Math', 30);

        jest.spyOn(university1, 'addTeachers');
        jest.spyOn(university1, 'addTeacher');
        jest.spyOn(university1, 'addStudents');
        jest.spyOn(university1, 'addStudent');
        jest.spyOn(university1, 'getTeachers');
        jest.spyOn(university1, 'getStudents');
        jest.spyOn(university1, 'makeFunEvent');
        jest.spyOn(console, 'log');
    });

    afterEach(() => {
        // jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    it('should be called addTeachers method', () => {
        // Act
        university1.addTeachers([mathTeacher]);
        // Assert
        expect(university1.addTeachers).toHaveBeenCalledTimes(1);
        expect(university1.addTeachers).toHaveBeenCalledWith([mathTeacher]);
        expect(university1.addTeachers).toHaveReturnedWith(true);
        expect(university1.addTeachers).toHaveReturnedTimes(1);
    });

    it('should be called addTeacher method inside addTeachers method', () => {
        // Act
        university1.addTeachers([mathTeacher, mathTeacher]);
        // Assert
        expect(university1.addTeacher).toHaveBeenCalledTimes(2);
        expect(university1.addTeacher).toHaveBeenCalledWith(mathTeacher);
        expect(university1.addTeacher).toHaveLastReturnedWith(2);
        expect(university1.addTeacher).toHaveReturnedTimes(2);
    });

    it('should be called getTeachers method', () => {
        // Arrange
        university1.addTeachers([mathTeacher]);
        // Act
        university1.getTeachers();
        // Assert
        expect(university1.getTeachers).toHaveBeenCalledTimes(1);
        expect(university1.getTeachers).toHaveBeenNthCalledWith(1);
        expect(university1.getTeachers).toHaveReturnedTimes(1);
        expect(university1.getTeachers).toHaveReturnedWith([mathTeacher]);
    });

    it('should be called makeFunEvent method positive', () => {
        // Act
        university1.makeFunEvent([student1, mathTeacher], mathClassRoom, '11:00');
        // Assert
        expect(university1.makeFunEvent).toHaveBeenCalledTimes(1);
        expect(university1.makeFunEvent).toHaveBeenCalledWith([student1, mathTeacher], mathClassRoom, '11:00');
        expect(university1.makeFunEvent).toHaveReturnedTimes(1);
        expect(university1.makeFunEvent).toHaveReturnedWith(true);
    });

    it('should be called makeFunEvent method negative', () => {
        // Act
        university1.makeFunEvent([student1, mathTeacher], mathClassRoom, '10:00');
        // Assert
        expect(university1.makeFunEvent).toHaveBeenCalledTimes(1);
        expect(university1.makeFunEvent).toHaveBeenCalledWith([student1, mathTeacher], mathClassRoom, '10:00');
        expect(university1.makeFunEvent).toHaveReturnedTimes(1);
        expect(university1.makeFunEvent).toHaveReturnedWith(false);
    });

    it('should be print in console after makeFunEvent method', () => {
        // Act
        university1.makeFunEvent([student1, mathTeacher], mathClassRoom, '11:00');
        // Assert
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Classroom Math is free at 11:00 and Visitors: John, John Doe, are having fun!');
    });
});
