import { ICollege, IInspection } from '../abstraction/index';

// DIP - Dependency Inversion Principle
export class Inspection implements IInspection {
    public inspect(educationInstitution: ICollege): boolean {
        console.log(`Inspecting ${educationInstitution.name}`);
        const teachers = educationInstitution.getTeachers();
        if (teachers.every((teacher) => teacher.experience > 1)) return true;
        return false;
    }
}
