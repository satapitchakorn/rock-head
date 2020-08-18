import { EventModel } from './event-model';
export interface LogBody {
    employee_no: number;
    admin_no: number;
    date_of_event: string;
    log_objects: EventModel[];
}
