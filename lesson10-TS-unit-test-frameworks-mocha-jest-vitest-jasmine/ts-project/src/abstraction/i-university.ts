import { IStudent, ITeacher, IClassroom } from './index';

export interface IUniversity {
    type: string;

    addTeachers(teachers: ITeacher[]): boolean;
    addStudents(students: IStudent[]): boolean;
    makeFunEvent(visitors: (IStudent | ITeacher)[], classroom: IClassroom, time: string): boolean;
}
