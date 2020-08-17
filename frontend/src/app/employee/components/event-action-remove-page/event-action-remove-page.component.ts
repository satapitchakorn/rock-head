import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-action-remove-page',
  templateUrl: './event-action-remove-page.component.html',
  styleUrls: ['./event-action-remove-page.component.css']
})
export class EventActionRemovePageComponent implements OnInit {

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
  }
  removeEmployeeAlert() {
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
          html: `This employee has been removed`,
          icon: 'success'
        })
      }
    })
  }
}
