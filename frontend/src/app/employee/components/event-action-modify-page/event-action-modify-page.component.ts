import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-action-modify-page',
  templateUrl: './event-action-modify-page.component.html',
  styleUrls: ['./event-action-modify-page.component.css']
})
export class EventActionModifyPageComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      passport: new FormControl(),
      employee_no: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      position: new FormControl(),
      start_date: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
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

  modifyEmployeeAlert() {
    console.log(this.form)
    const firstname = this.form.value.firstname
    const lastname = this.form.value.lastname
    const position = this.form.value.position
    const start_date = this.form.value.start_date
    const email = this.form.value.email
    const phone = this.form.value.phone
    Swal.fire({
      title: 'Are you sure?',
      html: `
        Firstname: ${firstname}
        <br/>
        Lastname: ${lastname}
        <br/>
        Position: ${position}
        <br/>
        Start Date: ${start_date}
        <br/>
        Email: ${email}
        <br/>
        Phone: ${phone}
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Successful!',
          'Your file has been modified.',
          'success'
        )
      }
    })
  }
}
