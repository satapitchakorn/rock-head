import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Employee} from '../../models/employee';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-event-action-add-page',
  templateUrl: './event-action-add-page.component.html',
  styleUrls: ['./event-action-add-page.component.css']
})
export class EventActionAddPageComponent implements OnInit {
  dataForm = this.fb.group({
    passport: [''],
    employee_no: [''],
    firstname: [''],
    lastname: [''],
    position: [''],
    start_date: [''],
    email: [''],
    phone: ['']
  });

  constructor(private fb: FormBuilder, private service: EmployeeService) { }

  ngOnInit(): void {
    //Check Valid forms 
    (function () {
      'use strict';
      window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
  }

  onSubmit(): void {
    console.log(this.dataForm.value);
    console.log(this.service.addEmployee());
  }
}
