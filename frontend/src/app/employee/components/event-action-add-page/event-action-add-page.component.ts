import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-action-add-page',
  templateUrl: './event-action-add-page.component.html',
  styleUrls: ['./event-action-add-page.component.css']
})
export class EventActionAddPageComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }


  confirmAlert() {
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
        Swal.fire(
          'Successful!',
          'New employee has been saved.',
          'success'
        )
      }
    })
  }
}
