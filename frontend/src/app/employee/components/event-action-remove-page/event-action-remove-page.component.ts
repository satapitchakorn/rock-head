import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { LogServiceService } from '@app/log/services/log-service.service';
import * as moment from 'moment';
@Component({
  selector: 'app-event-action-remove-page',
  templateUrl: './event-action-remove-page.component.html',
  styleUrls: ['./event-action-remove-page.component.css']
})
export class EventActionRemovePageComponent implements OnInit {

  form: FormGroup
  idType = ""
  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private logService: LogServiceService) {
    this.form = fb.group({})
  }

  ngOnInit(): void {
    this.employeeService.getEmployee("251166").subscribe((data) => {
      console.log(data);
      this.form = this.fb.group({
        passport: new FormControl({ value: data.passport, disabled: true }),
        employee_no: new FormControl({ value: data.employee_no, disabled: true }),
        firstname: new FormControl({ value: data.firstname, disabled: true }),
        lastname: new FormControl({ value: data.lastname, disabled: true }),
        position: new FormControl({ value: data.position, disabled: true }),
        start_date: new FormControl({ value: moment(data.start_date).format('yyyy-MM-DD'), disabled: true }),
        email: new FormControl({ value: data.email, disabled: true }),
        phone: new FormControl({ value: data.phone, disabled: true }),
      })
      if (this.form.value.passport.length == 13)
        this.idType = "Citizen identity number";
      else
        this.idType = "Passport";
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
