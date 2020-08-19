import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentModel } from '../../models/content-model';
import { LogServiceService } from './../../services/log-service.service';
import { LogModel } from '@app/log/models/log-model';
import { LogDisplay } from '@app/log/models/log-display';
import { EventModel } from '@app/log/models/event-model';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.css']
})
export class LogPageComponent implements OnInit {
  formIdFilter = 'All';
  options = ['All', '001', '002', '003'];
  column = ['id', 'event_message', 'form_id', 'by', 'date_time', 'element_name']
  contents: ContentModel;
  listLogModel: LogDisplay[] = [];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) pagiantor: MatPaginator;
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
      this.dataSource = new MatTableDataSource(this.listLogModel);
      this.dataSource.paginator = this.pagiantor;
    });
  }
  // filter(filterString: string): void {
  //   if (filterString === 'All') {
  //     this.listLogModel = this.logTmp;
  //   } else {
  //     this.listLogModel = this.logTmp.filter((x: LogDisplay) => x.log_objects.form_id === filterString);
  //   }
  //   console.log(this.listLogModel);
  // }
}