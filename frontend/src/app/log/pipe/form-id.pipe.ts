import { Pipe, PipeTransform } from '@angular/core';
import { ContentModel } from '../models/content-model';
import { LogModel } from '../models/log-model';
@Pipe({
  name: 'formIdFilter'
})
export class FormIdPipe implements PipeTransform {
  transform(content: LogModel[], form_id: string): LogModel[] {
    return content.filter((c) => c.log_objects[0].form_id.indexOf(form_id) != -1) ;
  }

}
