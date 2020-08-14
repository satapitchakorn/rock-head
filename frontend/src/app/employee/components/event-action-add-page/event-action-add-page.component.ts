import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-event-action-add-page',
  templateUrl: './event-action-add-page.component.html',
  styleUrls: ['./event-action-add-page.component.css']
})
export class EventActionAddPageComponent implements OnInit {

  dataForm = this.fb.group({
    passport: ['', Validators.required],
    employee_no: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    position: ['', Validators.required],
    start_date: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
      console.log(this.dataForm.value);
  }
}
