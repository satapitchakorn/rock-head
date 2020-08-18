import { Component, OnInit } from '@angular/core';
import { ContentModel } from '../../models/content-model';
import { LogServiceService } from './../../services/log-service.service';
import { LogModel } from '@app/log/models/log-model';
@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.css']
})
export class LogPageComponent implements OnInit {
  addBool: boolean;
  formIdFilter = '';
  modifyBool: boolean;
  deleteBool: boolean;
  contents: ContentModel;
  pipe: ContentModel;
  constructor(private logService: LogServiceService) {
    this.addBool = true;
    this.modifyBool = true;
    this.deleteBool = true;
   }

  ngOnInit(): void {
    this.logService.getAllLog().subscribe((content) => {
      this.contents = content;
    });
  }
  toggleAdd(): void{
    this.addBool = !this.addBool;
    if (this.addBool) {
      this.formIdFilter = '001';
    } else {
      this.formIdFilter = '002';
    }
  }
}
