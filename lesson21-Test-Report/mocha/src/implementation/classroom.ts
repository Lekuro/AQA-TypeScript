import { IClassroom, schedule } from '../abstraction/i-classroom';

export class Classroom implements IClassroom {
    public id: number | undefined;
    public name: string;
    public capacity: number;
    public freeTimes: string[];
    public bookedTimes: string[];

    public constructor(name: string, capacity: number) {
        this.id = undefined;
        this.name = name;
        this.capacity = capacity;
        this.freeTimes = schedule.map((time) => time);
        this.bookedTimes = [];
    }

    public bookTime(time: string): boolean {
        if (this.freeTimes.includes(time)) {
            this.freeTimes.splice(this.freeTimes.indexOf(time), 1);
            this.bookedTimes.push(time);
            this.bookedTimes.sort();
            return true;
        }
        return false;
    }

    protected freeTime(time: string): boolean {
        if (this.bookedTimes.includes(time)) {
            this.bookedTimes.splice(this.bookedTimes.indexOf(time), 1);
            this.freeTimes.push(time);
            this.freeTimes.sort();
            return true;
        }
        return false;
    }
}
