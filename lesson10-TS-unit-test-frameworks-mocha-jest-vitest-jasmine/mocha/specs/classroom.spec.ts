import { Classroom } from '../src/implementation/classroom';
import { schedule } from '../src/abstraction/index';
import { expect } from 'chai';

describe('-------- Classroom unit tests --------', () => {
    let classroom: Classroom;
    beforeEach(() => {
        // Arrange
        classroom = new Classroom('someClassRoom', 25);
    });
    describe('Create classroom', () => {
        it('should be created', () => {
            // Assert
            expect(classroom.freeTimes).to.deep.equal(schedule);
            expect(classroom.bookedTimes).to.deep.equal([]);
        });
    });
    describe('BookTime methods', () => {
        it('should update freeTimes and bookedTimes properties', () => {
            // Act
            classroom.bookTime('11:00');
            classroom.bookTime('15:00');
            classroom.bookTime('19:00');
            // Assert
            expect(classroom.freeTimes).to.deep.equal(['09:00', '13:00', '17:00']);
            expect(classroom.bookedTimes).to.deep.equal(['11:00', '15:00', '19:00']);
        });
    });
    describe('FreeTime methods', () => {
        it('should update freeTimes and bookedTimes properties', () => {
            // Arrange
            classroom.bookTime('11:00');
            classroom.bookTime('15:00');
            classroom.bookTime('19:00');
            // Act
            classroom.freeTime('11:00');
            classroom.freeTime('15:00');
            classroom.freeTime('19:00');
            // Assert
            expect(classroom.freeTimes).to.deep.equal(schedule);
            expect(classroom.bookedTimes).to.deep.equal([]);
        });
    });
});
