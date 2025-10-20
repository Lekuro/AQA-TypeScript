import { ICollege, ITeacher, IStudent, IClassroom } from '../abstraction/index';

export class University implements ICollege {
    public name: string;
    public address: string;
    public classrooms: IClassroom[] = [];
    public teachers: ITeacher[] = [];
    public students: IStudent[] = [];
    public type = 'university';

    public constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

    public addTeacher(teacher: ITeacher): number {
        this.teachers.push(teacher);
        teacher.id = this.teachers.indexOf(teacher) + 1;
        return teacher.id;
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

    public addStudent(student: IStudent): number {
        this.students.push(student);
        student.id = this.students.indexOf(student) + 1;
        return student.id;
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

    public addClassroom(classroom: IClassroom): number {
        this.classrooms.push(classroom);
        classroom.id = this.classrooms.indexOf(classroom) + 1;
        return classroom.id;
    }

    public getTeachers(): ITeacher[] {
        return this.teachers;
    }

    public getStudents(): IStudent[] {
        return this.students;
    }

    public getClassrooms(): IClassroom[] {
        return this.classrooms;
    }

    public getTeacherById(id: number): ITeacher {
        return this.teachers.find((teacher) => teacher.id === id) as ITeacher;
    }

    public getStudentById(id: number): IStudent {
        return this.students.find((student) => student.id === id) as IStudent;
    }

    public getClassroomById(id: number): IClassroom {
        return this.classrooms.find((classroom) => classroom.id === id) as IClassroom;
    }

    public getClassroomByName(name: string): IClassroom {
        return this.classrooms.find((classroom) => classroom.name === name) as IClassroom;
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
}
