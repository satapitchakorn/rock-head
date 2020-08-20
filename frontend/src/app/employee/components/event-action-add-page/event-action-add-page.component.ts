import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { LogServiceService } from '@app/log/services/log-service.service';
import { LogBody } from '@app/log/models/log-body';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { Observable, } from 'rxjs';

@Component({
  selector: 'app-event-action-add-page',
  templateUrl: './event-action-add-page.component.html',
  styleUrls: ['./event-action-add-page.component.css']
})

export class EventActionAddPageComponent implements OnInit {
  form: FormGroup;
  employee: Employee;
  submitted = false;
  validated = false;
  log: LogBody;


  //Way 2
  positions = ["", "Junior Front End Developer", "Junior Back End Developer", "Junior QA", "Project Manager", "Business Analyst", "Scrum Master"]
  term: string;


  //End Position Filter

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private logService: LogServiceService, private router: Router) {
    this.form = fb.group({
      passport: new FormControl('', [Validators.required, Validators.minLength(8)]),
      employee_no: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      start_date: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.valid) {
      const name = this.form.value.firstname + ' ' + this.form.value.lastname;
      Swal.fire({
        title: 'Are you sure?',
        text: 'You want to add new employee',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.value) {
          this.submitted = true;
          this.employeeService.addEmployee(this.form.value).subscribe(data => {
            if (data.status === 201) {
              this.log = {
                employee_no: this.form.value.employee_no,
                admin_no: this.logService.getAdminNo(),
                date_of_event: moment().format('YYYY-MM-DDTHH:mm:ss.SSS'),
                log_objects: [{
                  form_id: '001',
                  event_message: `Add ${this.form.value.firstname} ${this.form.value.lastname} successful.`,
                  element_name: '-'
                }],
              };
              this.logService.addLog(this.log).subscribe((response) => {
                console.log(response);
                if (response.status) {
                  Swal.fire({
                    title: 'Successful',
                    html: `${name} has been saved<br/><br/><b>Redirecting to logs page...<b> `,
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false
                  }).then(async () => {
                    this.router.navigateByUrl('/logs');
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
      });
    }
    else {
      this.validated = true;
    }
  }

  setEmployeeForm(): void {

  }

}
