import { EventModel } from './event-model';
import { EmployeeModel } from './employee-model';
import { AdminModel} from './admin-model';
export class LogDisplay {
    employee: EmployeeModel;
    admin: AdminModel;
    date_of_event: string;
    log_objects: EventModel;
    id: string;
}
