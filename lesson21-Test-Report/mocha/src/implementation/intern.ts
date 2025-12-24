import { IStudent, Level, ILesson, IClassroom, ITeacher } from '../abstraction/index';

// ISL - Interface Segregation Principle
// Bad example because it combine two big interfaces
export class Intern implements IStudent, ITeacher {
    public id: number | undefined;
    public name: string;
    private _age: number;
    public courses: string[];
    private _address: { country: string; city: string };
    public level: Level;
    public lessons: ILesson[];
    public subject: string;
    public experience: number;

    public constructor(name: string, age: number, address: { country: string; city: string }, subject: string) {
        this.id = undefined;
        this.name = name;
        this._age = age;
        this._address = address;
        this.level = Level.senior;
        this.courses = [];
        this.lessons = [];
        this.subject = subject;
        this.experience = 0;
    }

    public attendLesson(lesson: ILesson): boolean {
        this.lessons.push(lesson);
        return true;
    }

    public takeCourse(course: string): boolean {
        this.courses.push(course);
        return true;
    }

    public bookClassroom(classroom: IClassroom, time: string): boolean {
        return classroom.bookTime(time);
    }

    public giveLesson(lesson: ILesson): boolean {
        lesson.students.forEach((student) => student.attendLesson(lesson));
        return true;
    }
}
