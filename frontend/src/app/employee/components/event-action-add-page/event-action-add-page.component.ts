import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-event-action-add-page',
  templateUrl: './event-action-add-page.component.html',
  styleUrls: ['./event-action-add-page.component.css']
})
export class EventActionAddPageComponent implements OnInit {
  dataForm = new FormGroup({
    passport: new FormControl(''),
    employee_no: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    position: new FormControl(''),
    start_date: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.dataForm.value);
  }
}
