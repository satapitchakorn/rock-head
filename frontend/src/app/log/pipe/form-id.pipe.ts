import { Pipe, PipeTransform } from '@angular/core';
import { LogDisplay } from '../models/log-display';
@Pipe({
  name: 'formIdFilter'
})
export class FormIdPipe implements PipeTransform {
  transform(content: LogDisplay[], form_id: string): LogDisplay[] {
    if (form_id === 'All') {
      return content;
    }
    return content.filter((c) => c.log_objects.form_id.indexOf(form_id) !== -1);
  }

}
