import { ILesson, IClassroom, ITeacher, IExternalCourse } from '../abstraction/index';

// ISL - Interface Segregation Principle
// Better example because small interfaces IExternalCourse could be used for ITeacher or IIntern too!
export class Teacher implements ITeacher, IExternalCourse {
    public id: number | undefined;
    public name: string;
    private _age: number;
    public subject: string;
    public experience: number;

    public constructor(name: string, age: number, subject: string, experience: number) {
        this.id = undefined;
        this.name = name;
        this._age = age;
        this.subject = subject;
        this.experience = experience;
    }

    public bookClassroom(classroom: IClassroom, time: string): boolean {
        return classroom.bookTime(time);
    }

    public giveLesson(lesson: ILesson): boolean {
        lesson.students.forEach((student) => student.attendLesson(lesson));
        return true;
    }

    public makeExternalCourse(): void {
        console.log(`The teacher ${this.name} is giving an external course!`);
    }
}
