import { College, Classroom, Student, Teacher } from '../src/implementation/index';
import { Level } from '../src/abstraction/index';

describe('-------- College unit tests --------', () => {
    let college: College;

    beforeEach(() => {
        // Arrange
        college = new College('Westminster College', 'USA, Missouri, Fulton');
    });

    describe('Create college', () => {
        it('should be created', () => {
            expect(college.name).toBe('Westminster College');
            expect(college.address).toBe('USA, Missouri, Fulton');
        });
    });

    describe('addTeacher method', () => {
        it('should return id of added teacher', () => {
            // Arrange
            const mathTeacher = new Teacher('John Doe', 40, 'Math', 10);
            // Act
            const result = college.addTeacher(mathTeacher);
            // Assert
            expect(result).toBe(college.teachers.indexOf(mathTeacher) + 1);
        });
        it('teachers property should contain teacher', () => {
            // Arrange
            const mathTeacher = new Teacher('John Doe', 40, 'Math', 10);
            // Act
            college.addTeacher(mathTeacher);
            // Assert
            expect(college.teachers).toContain(mathTeacher);
        });
    });

    describe('addStudent method', () => {
        it('should return id of added student', () => {
            // Arrange
            const student = new Student('John Doe', 20, { country: 'USA', city: 'New York' }, Level.junior);
            // Act
            const result = college.addStudent(student);
            // Assert
            expect(result).toBe(college.students.indexOf(student) + 1);
        });
        it('students property should contain student', () => {
            // Arrange
            const student = new Student('John Doe', 20, { country: 'USA', city: 'New York' }, Level.junior);
            // Act
            college.addStudent(student);
            // Assert
            expect(college.students).toContain(student);
        });
    });

    describe('addClassroom method', () => {
        it('should return id of added classroom', () => {
            // Arrange
            const mathClassRoom = new Classroom('Math', 30);
            // Act
            const result = college.addClassroom(mathClassRoom);
            // Assert
            expect(result).toBe(college.classrooms.indexOf(mathClassRoom) + 1);
        });
        it('classrooms property should contain classroom', () => {
            // Arrange
            const mathClassRoom = new Classroom('Math', 30);
            // Act
            college.addClassroom(mathClassRoom);
            // Assert
            expect(college.classrooms).toContain(mathClassRoom);
        });
    });

    describe('getTeacherById method', () => {
        it('should return teacher', () => {
            // Arrange
            const mathTeacher = new Teacher('John Doe', 40, 'Math', 10);
            college.addTeacher(mathTeacher);
            // Act
            const result = college.getTeacherById(mathTeacher.id as number);
            // Assert
            expect(result).toMatchObject(mathTeacher);
        });
    });

    describe('getStudentById method', () => {
        it('should return student', () => {
            // Arrange
            const student = new Student('John Doe', 20, { country: 'USA', city: 'New York' }, Level.junior);
            college.addStudent(student);
            // Act
            const result = college.getStudentById(student.id as number);
            // Assert
            expect(result).toMatchObject(student);
        });
    });

    describe('getClassroomById method', () => {
        it('should return classroom', () => {
            // Arrange
            const mathClassRoom = new Classroom('Math', 30);
            college.addClassroom(mathClassRoom);
            // Act
            const result = college.getClassroomById(mathClassRoom.id as number);
            // Assert
            expect(result).toMatchObject(mathClassRoom);
        });
    });

    describe('getTeachers method', () => {
        it('should return all teachers of college', () => {
            // Arrange
            const mathTeacher = new Teacher('John Doe', 40, 'Math', 10);
            const physicsTeacher = new Teacher('Jane Doe', 40, 'Physics', 10);
            college.addTeacher(mathTeacher);
            college.addTeacher(physicsTeacher);
            // Act
            const result = college.getTeachers();
            // Assert
            expect(result).toContain(mathTeacher);
            expect(result).toContain(physicsTeacher);
            expect(result.length).toBe(2);
            expect(result).toEqual(expect.arrayContaining([mathTeacher, physicsTeacher]));
        });
    });

    describe('getStudents method', () => {
        it('should return all students of college', () => {
            // Arrange
            const student1 = new Student('John Doe', 20, { country: 'USA', city: 'New York' }, Level.junior);
            const student2 = new Student('Jane Doe', 21, { country: 'USA', city: 'Texas' }, Level.sophomore);
            college.addStudent(student1);
            college.addStudent(student2);
            // Act
            const result = college.getStudents();
            // Assert
            expect(result).toContain(student1);
            expect(result).toContain(student2);
            expect(result.length).toBe(2);
            expect(result).toEqual(expect.arrayContaining([student1, student2]));
        });
    });

    describe('getClassrooms method', () => {
        it('should return all classrooms of college', () => {
            // Arrange
            const mathClassRoom = new Classroom('Math', 30);
            const physicsClassRoom = new Classroom('Physics', 30);
            college.addClassroom(mathClassRoom);
            college.addClassroom(physicsClassRoom);
            // Act
            const result = college.getClassrooms();
            // Assert
            expect(result).toContain(mathClassRoom);
            expect(result).toContain(physicsClassRoom);
            expect(result.length).toBe(2);
            expect(result).toEqual(expect.arrayContaining([mathClassRoom, physicsClassRoom]));
        });
    });
});
