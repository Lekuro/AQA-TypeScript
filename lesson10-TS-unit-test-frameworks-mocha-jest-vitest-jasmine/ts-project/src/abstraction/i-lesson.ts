import { IClassroom, IStudent, ITeacher } from './index';

export interface ILesson {
    subject: string;
    teacher: ITeacher;
    students: IStudent[];
    classroom: IClassroom;
    date: Date;
}
