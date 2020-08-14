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
      email: new FormControl(),
      phone: new FormControl(),
      start_date: new FormControl(),
    })
  }

  ngOnInit(): void {

  }

  modifyEmployeeAlert() {
    console.log(this.form.value.firstname);
    const answers = this.form.value.firstname + ' ' + this.form.value.lastname
    Swal.fire({
      title: 'Are you sure?',
      html: `
        Form: ${answers}
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
