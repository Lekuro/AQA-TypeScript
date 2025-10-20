import { ILesson, IClassroom, ITeacher } from '../abstraction/index';

export class Teacher implements ITeacher {
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
}
