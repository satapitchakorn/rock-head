import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-event-action-add-page',
  templateUrl: './event-action-add-page.component.html',
  styleUrls: ['./event-action-add-page.component.css']
})

export class EventActionAddPageComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder, private service: EmployeeService) {
    this.form = fb.group({
      passport: new FormControl(''),
      employee_no: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      position: new FormControl(''),
      start_date: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
    })
  }


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


  addEmployeeAlert() {
    const name = this.form.value.firstname + ' ' + this.form.value.lastname
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Successful',
          html: `${name} has been saved`,
          icon: 'success'
        })
      }
    })
  }


  onSubmit(): void {
    console.log(this.form.value);
    console.log(this.service.addEmployee());
  }

}


