import { IClassroom, ILesson } from './index';

export interface ITeacher {
    id: number | undefined;
    name: string;
    _age: number;
    subject: string;
    experience: number;

    giveLesson(lesson: ILesson): boolean;
    bookClassroom(classroom: IClassroom, time: string): boolean;
}
