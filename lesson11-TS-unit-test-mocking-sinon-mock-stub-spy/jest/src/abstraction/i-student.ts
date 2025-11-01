import { ILesson } from './i-lesson';

export enum Level {
    freshman = 'freshman',
    sophomore = 'sophomore',
    junior = 'junior',
    senior = 'senior'
}

export interface IStudent {
    id: number | undefined;
    name: string;
    // age: number;
    courses: string[];
    // address: { country: string; city: string };
    level: Level;
    lessons: ILesson[];

    attendLesson(lesson: ILesson): boolean;
    takeCourse(course: string): boolean;
}
