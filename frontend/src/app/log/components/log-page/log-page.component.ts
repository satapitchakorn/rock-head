import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentModel } from '../../models/content-model';
import { LogServiceService } from './../../services/log-service.service';
import { LogModel } from '@app/log/models/log-model';
import { LogDisplay } from '@app/log/models/log-display';
import { EventModel } from '@app/log/models/event-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.css']
})
export class LogPageComponent implements OnInit {
  formIdFilter = 'All';
  searchFilter = '';
  options = [{ id: 'All', name: 'All' }, { id: '001', name: 'Add (001)' }, { id: '002', name: 'Modify (002)' }, { id: '003', name: 'Remove (003)' }];
  column = ['date_time', 'event_message', 'form_id', 'by', 'element_name'];
  contents: ContentModel;
  listLogModel: LogDisplay[] = [];
  dataSource = new MatTableDataSource<LogDisplay>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private logService: LogServiceService) { }

  ngOnInit(): void {
    this.logService.getAllLog().subscribe((content) => {
      this.contents = content;
      this.contents.content.forEach((content: LogModel) => {
        content.log_objects.forEach((objects: EventModel) => {
          let display = new LogDisplay();
          display.admin = content.admin;
          display.employee = content.employee;
          display.date_of_event = content.date_of_event;
          display.log_objects = objects;
          this.listLogModel.push(display);
        });
      });
      this.dataSource = new MatTableDataSource<LogDisplay>(this.listLogModel);
      this.dataSource.paginator = this.paginator;
    });
  }
  filter(): void {
    if (this.formIdFilter === 'All') {
      this.dataSource.filter = '';
    } else {
      this.formIdFilter = this.formIdFilter.trim();
      this.formIdFilter = this.formIdFilter.toLowerCase();
      this.dataSource.filterPredicate =
        (data: LogDisplay, filter: string) => data.log_objects.form_id.indexOf(filter) !== -1;
      this.dataSource.filter = this.formIdFilter;
    }
  }
  applyFilter(search: any): void {
    if (search === '') {
      this.dataSource.filter = '';
    } else {
      this.dataSource.filterPredicate =
        (data: LogDisplay, filter: string) => {
          return (data.admin.admin_no.toString().indexOf(filter) !== -1 || data.admin.email.indexOf(filter) !== -1 ||
            data.date_of_event.includes(filter) || data.employee.employee_no.toString().indexOf(filter) !== -1 ||
            data.employee.firstname.toLowerCase().includes(filter) || data.employee.lastname.toLowerCase().includes(filter) ||
            data.log_objects.element_name.toLowerCase().includes(filter) || data.log_objects.event_message.toLowerCase().includes(filter) ||
            data.log_objects.form_id.indexOf(filter) !== -1);
        };
      search = search.trim();
      search = search.toLowerCase();
      this.dataSource.filter = search;
    }
  }
}
