import { IUniversity, ITeacher, IStudent, IClassroom } from '../abstraction/index';
import { College } from './index';

// OCP - Open/Closed Principle
// Open to extension, closed to modification
export class University extends College implements IUniversity {
    public type = 'university';

    public constructor(name: string, address: string) {
        super(name, address);
    }

    public addTeachers(teachers: ITeacher[]): boolean {
        try {
            teachers.forEach((teacher) => this.addTeacher(teacher));
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    public addStudents(students: IStudent[]): boolean {
        try {
            students.forEach((student) => this.addStudent(student));
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    public makeFunEvent(visitors: (IStudent | ITeacher)[], classroom: IClassroom, time: string): boolean {
        if (classroom.bookTime(time)) {
            console.log(
                `Classroom ${classroom.name} is free at ${time} and ${visitors.reduce((acc, visitor) => `${acc} ${visitor.name},`, 'Visitors:')} are having fun!`
            );
            return true;
        }
        return false;
    }

    // private graduateWithBachelor();
    // private graduateWithMasters();
}
