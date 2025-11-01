import { jest } from '@jest/globals';
import { College, Teacher, Inspection } from '../src/implementation/index';

describe('-------- College unit tests --------', () => {
    let mockedCollege: jest.Mocked<College>;
    let mathTeacher: Teacher;
    let inspector: Inspection;

    beforeEach(() => {
        // Arrange
        mockedCollege = {
            getTeachers: jest.fn(),
            addTeacher: jest.fn()
        } as unknown as jest.Mocked<College>;
        mathTeacher = new Teacher('John Doe', 40, 'Math', 10);
        inspector = new Inspection();
    });

    describe('-------- Mocked College unit tests --------', () => {
        it('should be called addTeacher method', () => {
            // Arrange
            mockedCollege.addTeacher.mockReturnValue(1);
            // Act
            mockedCollege.addTeacher(mathTeacher);
            // Assert
            expect(mockedCollege.addTeacher).toHaveBeenCalledTimes(1);
            expect(mockedCollege.addTeacher).toHaveBeenCalledWith(mathTeacher);
            expect(mockedCollege.addTeacher).toHaveReturnedWith(1);
            expect(mockedCollege.addTeacher).toHaveReturnedTimes(1);
        });

        it('should be called getTeachers method', () => {
            // Arrange
            mockedCollege.addTeacher(mathTeacher);
            mockedCollege.getTeachers.mockReturnValue([mathTeacher]);
            // Act
            inspector.inspect(mockedCollege);
            // Assert
            expect(mockedCollege.getTeachers).toHaveBeenCalled();
            expect(mockedCollege.getTeachers).toHaveBeenCalledTimes(1);
            expect(mockedCollege.getTeachers).toHaveReturnedTimes(1);
            expect(mockedCollege.getTeachers).toHaveReturned();
            expect(mockedCollege.getTeachers).toHaveReturnedWith([mathTeacher]);
            expect(mockedCollege.getTeachers).toHaveBeenCalledWith();
        });
    });
});
