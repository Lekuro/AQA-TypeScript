import { IStudent, ITeacher, IClassroom } from './index';

export interface ICollege {
    name: string;
    address: string;
    teachers: ITeacher[];
    students: IStudent[];
    classrooms: IClassroom[];

    addTeacher(teacher: ITeacher): number;
    addStudent(student: IStudent): number;
    addClassroom(classroom: IClassroom): number;
    getTeachers(): ITeacher[];
    getStudents(): IStudent[];
    getClassrooms(): IClassroom[];
    getTeacherById(id: number): ITeacher;
    getStudentById(id: number): IStudent;
    getClassroomById(id: number): IClassroom;
    // getClassroomByName(name: string): IClassroom;
}
