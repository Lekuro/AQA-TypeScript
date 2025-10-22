import { IStudent, ITeacher, IClassroom } from './index';

export interface IUniversity {
    // name: string;
    // address: string;
    // teachers: ITeacher[];
    // students: IStudent[];
    // classrooms: IClassroom[];
    type: string;

    // addTeacher(teacher: ITeacher): number;
    addTeachers(teachers: ITeacher[]): boolean;
    // addStudent(student: IStudent): number;
    addStudents(students: IStudent[]): boolean;
    // addClassroom(classroom: IClassroom): number;
    // getTeachers(): ITeacher[];
    // getStudents(): IStudent[];
    // getClassrooms(): IClassroom[];
    // getTeacherById(id: number): ITeacher;
    // getStudentById(id: number): IStudent;
    // getClassroomById(id: number): IClassroom;
    // // getClassroomByName(name: string): IClassroom;
    makeFunEvent(visitors: (IStudent | ITeacher)[], classroom: IClassroom, time: string): boolean;
}
