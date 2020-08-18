import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { LogServiceService } from '@app/log/services/log-service.service';

@Component({
  selector: 'app-event-action-remove-page',
  templateUrl: './event-action-remove-page.component.html',
  styleUrls: ['./event-action-remove-page.component.css']
})
export class EventActionRemovePageComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private logService: LogServiceService) {
    // this.form = fb.group({
    //   passport: new FormControl(),
    //   employee_no: new FormControl(),
    //   firstname: new FormControl(),
    //   lastname: new FormControl(),
    //   position: new FormControl(),
    //   start_date: new FormControl(),
    //   email: new FormControl(),
    //   phone: new FormControl(),
    // })
  }

  ngOnInit(): void {
    this.employeeService.getEmployee("251166").subscribe((data) => {
      console.log(data);
      this.form = this.fb.group({
        passport: new FormControl(data.passport),
        employee_no: new FormControl(data.employee_no),
        firstname: new FormControl(data.firstname),
        lastname: new FormControl(data.lastname),
        position: new FormControl(data.position),
        start_date: new FormControl(data.start_date),
        email: new FormControl(data.email),
        phone: new FormControl(data.phone),
      })
    })
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
      this.employeeService.removeEmployee(this.form.value.employeeNo).subscribe((response) => {
        if (result.value) {
          Swal.fire({
            title: 'Successful',
            html: `This employee has been removed`,
            icon: 'success'
          })
        }
      });
    })
  }
}
