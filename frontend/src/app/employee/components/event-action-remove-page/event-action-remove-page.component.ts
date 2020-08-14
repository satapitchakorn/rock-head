import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-event-action-remove-page',
  templateUrl: './event-action-remove-page.component.html',
  styleUrls: ['./event-action-remove-page.component.css']
})
export class EventActionRemovePageComponent implements OnInit {

  constructor() { }

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
          'Remove employee has been saved.',
          'success'
        )
      }
    })
  }
}
