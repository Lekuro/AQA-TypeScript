export const schedule = ['9:00', '11:00', '13:00', '15:00', '17:00', '19:00'];

export interface IClassroom {
    name: string;
    capacity: number;
    freeTimes: string[];
    bookedTimes: string[];

    bookTime(time: string): boolean;
    freeTime(time: string): boolean;
}
