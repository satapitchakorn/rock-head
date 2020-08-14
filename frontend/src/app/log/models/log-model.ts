import { EventModel } from './event-model';
import { EmployeeModel } from './employee-model';
import { AdminModel} from './admin-model';
export class LogModel {
    public id: string;
    public employee: EmployeeModel;
    public admin: AdminModel;
    public date_of_event: string;
    public log_objects: EventModel[];

}
