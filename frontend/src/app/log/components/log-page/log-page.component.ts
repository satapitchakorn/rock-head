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

  contents: ContentModel;
  constructor(private logService: LogServiceService) { }

  ngOnInit(): void {
    this.logService.getAllLog().subscribe((content) => {
      this.contents = content;
    });

  }
}
