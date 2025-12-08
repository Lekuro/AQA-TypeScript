import { ICollege, ITeacher, IStudent, IClassroom } from '../abstraction/index';

export class College implements ICollege {
    public name: string;
    public address: string;
    public teachers: ITeacher[] = [];
    public students: IStudent[] = [];
    public classrooms: IClassroom[] = [];

    public constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

    public addTeacher(teacher: ITeacher): number {
        const id = this.teachers.length + 1;
        teacher.id = id;
        this.teachers.push(teacher);
        return id;
    }

    public addStudent(student: IStudent): number {
        this.students.push(student);
        const id = this.students.indexOf(student) + 1;
        student.id = id;
        return id;
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

    private getClassroomByName(name: string): IClassroom {
        return this.classrooms.find((classroom) => classroom.name === name) as IClassroom;
    }

    public getClassroomById(id: number): IClassroom {
        return this.classrooms.find((classroom) => classroom.id === id) as IClassroom;
    }
}
