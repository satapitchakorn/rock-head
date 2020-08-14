import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  onSubmit() {
    console.log(this.dataForm.value);
  }
}
