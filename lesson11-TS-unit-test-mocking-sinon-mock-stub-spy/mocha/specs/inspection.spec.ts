import * as sinon from 'ts-sinon';
import { expect } from 'chai';
import { Inspection, College, University, Teacher, Intern } from '../src/implementation/index';

const university1 = new University('Johns Hopkins University', 'USA');
const college1 = new College('Williams College', 'USA');
const mathTeacher = new Teacher('Mike', 40, 'Math', 10);
const englishTeacher = new Teacher('John Doe', 40, 'English', 10);
const studentIntern = new Intern('John', 20, { country: 'USA', city: 'Texas' }, 'Math');
university1.addTeachers([mathTeacher, englishTeacher]);
college1.addTeacher(mathTeacher);
college1.addTeacher(englishTeacher);
college1.addTeacher(studentIntern);

describe('-------- Inspection unit tests --------', () => {
    let inspectionStub: sinon.StubbedInstance<Inspection>;
    beforeEach(() => {
        // Arrange
        inspectionStub = sinon.stubConstructor(Inspection);
    });

    afterEach(() => {
        sinon.default.restore();
    });

    describe('Stubbed inspection inspect college, university', () => {
        it('should be called inspect method', () => {
            // Act
            inspectionStub.inspect(college1);
            inspectionStub.inspect(university1);
            // Assert
            expect(inspectionStub.inspect.calledTwice).to.be.true;
            expect(inspectionStub.inspect.calledOn(inspectionStub)).to.be.true;
            expect(inspectionStub.inspect.calledWith(college1)).to.be.true;
            expect(inspectionStub.inspect.calledWith(university1)).to.be.true;
        });
    });

    describe('Spy on inspect method', () => {
        it('should be called inspect method', () => {
            // Arrange
            const inspection = new Inspection();
            const spyOfInspect = sinon.default.spy(inspection, 'inspect');
            // Act
            const college1Inspected = inspection.inspect(college1);
            const university1Inspected = inspection.inspect(university1);
            // Assert
            expect(spyOfInspect.calledTwice).to.be.true;
            expect(spyOfInspect.calledWith(college1)).to.be.true;
            expect(spyOfInspect.calledWith(university1)).to.be.true;
            expect(spyOfInspect.calledOn(inspection)).to.be.true;
            expect(college1Inspected).to.be.false;
            expect(university1Inspected).to.be.true;
            spyOfInspect.restore();
        });
    });
});
