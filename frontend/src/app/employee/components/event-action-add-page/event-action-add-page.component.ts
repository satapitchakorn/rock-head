import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-event-action-add-page',
  templateUrl: './event-action-add-page.component.html',
  styleUrls: ['./event-action-add-page.component.css']
})

export class EventActionAddPageComponent implements OnInit {
  form: FormGroup;


  constructor(private fb: FormBuilder, private service: EmployeeService) {
    this.form = fb.group({
      passport: new FormControl('', Validators.required),
      employee_no: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      start_date: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
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


  addEmployeeAlert(): void {
    if (this.form.status === 'VALID'){
      const name = this.form.value.firstname + ' ' + this.form.value.lastname;
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
        this.onSubmit();
        Swal.fire({
          title: 'Successful',
          html: `${name} has been saved`,
          icon: 'success'
        });
      }
    });
    }
  }


  onSubmit(): void {
    console.log(this.form.value);
    console.log(this.service.addEmployee());
  }

}
