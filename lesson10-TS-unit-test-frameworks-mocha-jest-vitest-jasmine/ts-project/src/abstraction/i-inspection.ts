import { ICollege } from './i-college';

export interface IInspection {
    inspect(educationInstitution: ICollege): boolean;
}
