import { LogModel } from './log-model';
export interface ContentModel {
    content: LogModel[];
    totalPages: number;
    last: boolean;
    number: number;
}
