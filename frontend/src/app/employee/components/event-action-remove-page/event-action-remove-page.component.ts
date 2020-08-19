import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { LogServiceService } from '@app/log/services/log-service.service';
import * as moment from 'moment';
import { LogBody } from '@app/log/models/log-body';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-action-remove-page',
  templateUrl: './event-action-remove-page.component.html',
  styleUrls: ['./event-action-remove-page.component.css']
})
export class EventActionRemovePageComponent implements OnInit {

  form: FormGroup;
  type = ""
  submitted = false;
  log: LogBody;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private logService: LogServiceService, private router: Router) {
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
        this.type = "Citizen identity number";
      else
        this.type = "Passport";
    })
  }


  onSubmit() {
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
        this.submitted = true;
        this.employeeService.removeEmployee(this.form.value.employee_no).subscribe(data => {
          if (data.status === 200) {
            this.log = {
              employee_no: this.form.value.employee_no,
              admin_no: this.logService.getAdminNo(),
              date_of_event: moment().add(7, 'hours').format('YYYY-MM-DDTHH:mm:ss.SSS'),
              log_objects: [{
                form_id: '003',
                event_message: `Remove ${this.form.value.firstname} ${this.form.value.lastname} successful.`,
                element_name: '-'
              }],
            };
            this.logService.addLog(this.log).subscribe((response) => {
              console.log(response);
              if (response.status) {
                Swal.fire({
                  title: 'Successful',
                  html: `This employee has been removed<br/><br/><b>Redirecting to log page...<b>`,
                  icon: 'success',
                  timer: 1500,
                  showConfirmButton: false
                }).then(async () => {
                  this.router.navigateByUrl('/log');
                });
              } else {
                Swal.fire({
                  title: 'Error',
                  html: `Something went wrong.`,
                  icon: 'error'
                });
              }
            });
          } else {
            Swal.fire({
              title: 'Error',
              html: `Something went wrong.`,
              icon: 'error'
            });
          }
        });
      }
    })
  }
}
