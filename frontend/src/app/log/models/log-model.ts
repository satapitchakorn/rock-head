import { EventModel } from './event-model';
import { EmployeeModel } from './employee-model';
import { AdminModel} from './admin-model';
export interface LogModel {
    employee: EmployeeModel;
    admin: AdminModel;
    date_of_event: string;
    log_objects: EventModel[];
    id: string;
}
