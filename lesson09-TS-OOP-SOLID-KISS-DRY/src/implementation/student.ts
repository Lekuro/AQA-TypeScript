import { IStudent, Level, ILesson } from '../abstraction/index';

export class Student implements IStudent {
    public id: number | undefined;
    public name: string;
    private age: number;
    public courses: string[];
    private address: { country: string; city: string };
    public level: Level;
    public lessons: ILesson[];

    public constructor(name: string, age: number, address: { country: string; city: string }, level: Level) {
        this.id = undefined;
        this.name = name;
        this.age = age;
        this.address = address;
        this.level = level;
        this.courses = [];
        this.lessons = [];
    }

    public attendLesson(lesson: ILesson): boolean {
        this.lessons.push(lesson);
        return true;
    }

    public takeCourse(course: string): boolean {
        this.courses.push(course);
        return true;
    }
}
