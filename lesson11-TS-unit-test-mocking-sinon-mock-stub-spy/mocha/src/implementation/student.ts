import { IStudent, Level, ILesson, IExternalCourse } from '../abstraction/index';

// ISL - Interface Segregation Principle
// Better example because small interfaces IExternalCourse could be used for ITeacher or IIntern too!
export class Student implements IStudent, IExternalCourse {
    public id: number | undefined;
    public name: string;
    private _age: number;
    public courses: string[];
    private _address: { country: string; city: string };
    public level: Level;
    public lessons: ILesson[];

    public constructor(name: string, age: number, address: { country: string; city: string }, level: Level) {
        this.id = undefined;
        this.name = name;
        this._age = age;
        this._address = address;
        this.level = level;
        this.courses = [];
        this.lessons = [];
    }

    public get age(): number {
        return this._age;
    }

    public get address(): { country: string; city: string } {
        return this._address;
    }

    public attendLesson(lesson: ILesson): boolean {
        this.lessons.push(lesson);
        return true;
    }

    public takeCourse(course: string): boolean {
        this.courses.push(course);
        return true;
    }

    public makeExternalCourse(): void {
        console.log(`The student ${this.name} is making an external course!`);
    }
}
