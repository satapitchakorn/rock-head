import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { LogServiceService } from '@app/log/services/log-service.service';
import { LogBody } from '@app/log/models/log-body';
import * as moment from 'moment';
import { EventModel } from '@app/log/models/event-model';
import * as clone from 'clone';

@Component({
  selector: 'app-event-action-modify-page',
  templateUrl: './event-action-modify-page.component.html',
  styleUrls: ['./event-action-modify-page.component.css']
})
export class EventActionModifyPageComponent implements OnInit {

  form: FormGroup;
  employee: Employee;
  submitted = false;
  validated = false;
  type = ""
  formTmp: FormGroup;
  log: LogBody;
  message: EventModel[] = [];

  modify = [
    {
      element_name: 'firstname',
      isModify: false
    },

    {
      element_name: 'lastname',
      isModify: false
    },
    {
      element_name: 'position',
      isModify: false
    },
    {
      element_name: 'start_date',
      isModify: false
    },
    {
      element_name: 'email',
      isModify: false
    },
    {
      element_name: 'phone',
      isModify: false
    }
  ];

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private logService: LogServiceService) {
  }

  // TODO: Get data by id
  ngOnInit(): void {
    this.employeeService.getEmployee('251182').subscribe(data => {
      console.log(data);
      this.form = this.fb.group({
        passport: new FormControl(data.passport, Validators.required),
        employee_no: new FormControl(data.employee_no, Validators.required),
        firstname: new FormControl(data.firstname, Validators.required),
        lastname: new FormControl(data.lastname, Validators.required),
        position: new FormControl(data.position, Validators.required),
        start_date: new FormControl(moment(data.start_date).format('yyyy-MM-DD'), Validators.required),
        email: new FormControl(data.email, Validators.required),
        phone: new FormControl(data.phone, Validators.required),
      });
      this.formTmp = this.deepClone(this.form);
    });
  }
  deepClone<T>(value): T {
    return clone<T>(value);
  }

  compareString(): any {
    this.formTmp.value.firstname !== this.form.value.firstname ? this.modify[0].isModify = true : this.modify[0].isModify = false;
    this.formTmp.value.lastname !== this.form.value.lastname ? this.modify[1].isModify = true : this.modify[1].isModify = false;
    this.formTmp.value.position !== this.form.value.position ? this.modify[2].isModify = true : this.modify[2].isModify = false;
    this.formTmp.value.start_date !== this.form.value.start_date ? this.modify[3].isModify = true : this.modify[3].isModify = false;
    this.formTmp.value.email !== this.form.value.email ? this.modify[4].isModify = true : this.modify[4].isModify = false;
    this.formTmp.value.phone !== this.form.value.phone ? this.modify[5].isModify = true : this.modify[5].isModify = false;

    return this.modify;
  }

  onSubmit(): void {
    this.modify = this.compareString();
    this.generateEventMessage();
    if (this.form.valid) {
      const firstname = this.form.value.firstname;
      const lastname = this.form.value.lastname;
      const position = this.form.value.position;
      const start_date = this.form.value.start_date;
      const email = this.form.value.email;
      const phone = this.form.value.phone;
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
          this.submitted = true;
          this.employeeService.modifyEmployee(this.form.value.employee_no, this.form.value).subscribe(data => {
            if (data.status === 201) {
              this.log = {
                employee_no: this.form.value.employee_no,
                admin_no: this.logService.getAdminNo(),
                date_of_event: moment().format('YYYY-MM-DDTHH:mm:ss.SSS'),
                log_objects: this.generateEventMessage(),
              };
            }
          });
          Swal.fire(
            'Successful!',
            'Your file has been modified.',
            'success'
          );
        }
      });
    }
    else {
      this.validated = true;
    }
  }
  generateEventMessage(): EventModel[] {
    this.modify.forEach(data => {
      if (data.isModify) {
        this.message.push({
          element_name: data.element_name,
          event_message: `Modify ${data.element_name} from ${this.formTmp.get(data.element_name).value} to ${this.form.get(data.element_name).value}`,
          form_id: '002'
        });
      }
    });
    console.log(this.message);

    return this.message;
  }
}
