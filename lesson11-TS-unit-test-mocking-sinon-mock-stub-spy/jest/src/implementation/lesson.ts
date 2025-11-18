import { ILesson, ITeacher, IStudent, IClassroom } from '../abstraction/index';

export class Lesson implements ILesson {
    public subject: string;
    public teacher: ITeacher;
    public students: IStudent[];
    public classroom: IClassroom;
    public date: Date;

    public constructor(subject: string, teacher: ITeacher, students: IStudent[], classroom: IClassroom, date: Date) {
        this.subject = subject;
        this.teacher = teacher;
        this.students = students;
        this.classroom = classroom;
        this.date = date;
    }
}
