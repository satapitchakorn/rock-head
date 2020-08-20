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
import { Router, ActivatedRoute } from '@angular/router';

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
  formTmp: FormGroup;
  log: LogBody;
  message: EventModel[] = [];

  modify = [
    {
      element_name: 'First Name',
      isModify: false,
      form_name: 'firstname'
    },

    {
      element_name: 'Last Name',
      isModify: false,
      form_name: 'lastname'
    },
    {
      element_name: 'Position',
      isModify: false,
      form_name: 'position'
    },
    {
      element_name: 'Start Date',
      isModify: false,
      form_name: 'start_date'
    },
    {
      element_name: 'Email',
      isModify: false,
      form_name: 'email'
    },
    {
      element_name: 'Mobile Phone Number',
      isModify: false,
      form_name: 'phone'
    }
  ];

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private logService: LogServiceService, private router: Router, private acRouter: ActivatedRoute) {
    this.form = fb.group({});

  }

  ngOnInit(): void {
    const empId = parseInt(this.acRouter.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(empId).subscribe(data => {
      this.form = this.fb.group({
        passport: new FormControl(data.passport, Validators.required),
        employee_no: new FormControl(data.employee_no, Validators.required),
        firstname: new FormControl(data.firstname, Validators.required),
        lastname: new FormControl(data.lastname, Validators.required),
        position: new FormControl(data.position, Validators.required),
        start_date: new FormControl(moment(data.start_date).format('yyyy-MM-DD'), Validators.required),
        email: new FormControl(data.email, Validators.required),
        phone: new FormControl(data.phone, Validators.required),
        type: new FormControl('', Validators.required)
      });
      this.formTmp = this.deepClone(this.form);
      if (data.passport.length === 13) {
        this.form.controls.type.setValue('Identity Card No.');
      } else {
        this.form.controls.type.setValue('Passport');
      }
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
    let fireMessage = '';
    for (let i = 0; i < this.modify.length; i++) {
      if (this.modify[i].isModify) {
        const firstname = this.form.value.firstname;
        const lastname = this.form.value.lastname;
        const position = this.form.value.position;
        const start_date = this.form.value.start_date;
        const email = this.form.value.email;
        const phone = this.form.value.phone;
        switch (i) {
          case 0: {
            fireMessage = fireMessage.concat(`First Name: ${firstname}<br/><br/>`);
            break;
          }
          case 1: {
            fireMessage = fireMessage.concat(`Last Name: ${lastname}<br/><br/>`);
            break;
          }
          case 2: {
            fireMessage = fireMessage.concat(`Position: ${position}<br/><br/>`);
            break;
          }
          case 3: {
            fireMessage = fireMessage.concat(`Start Date: ${start_date}<br/><br/>`);
            break;
          }
          case 4: {
            fireMessage = fireMessage.concat(`Email: ${email}<br/><br/>`);
            break;
          }
          case 5: {
            fireMessage = fireMessage.concat(`Mobile Phone Number: ${phone}<br/><br/>`);
            break;
          }
          default: { break; }
        }
        fireMessage = fireMessage.slice(0, -5);
      }
    }
    Swal.fire({
      title: 'Are you sure?',
      html: fireMessage,
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
          if (data.status === 200) {
            this.log = {
              employee_no: this.form.value.employee_no,
              admin_no: this.logService.getAdminNo(),
              date_of_event: moment().format('YYYY-MM-DDTHH:mm:ss.SSS'),
              log_objects: this.generateEventMessage(),
            };
            this.logService.addLog(this.log).subscribe(data => {
              if (data.status === 201) {
                Swal.fire({
                  title: 'Successful',
                  html: `Your file has been modified<br/><br/><b>Redirecting to logs page...<b> `,
                  icon: 'success',
                  timer: 1500,
                  showConfirmButton: false
                }).then(async () => {
                  this.router.navigateByUrl('/logs');
                });
              } else {
                Swal.fire(
                  'Error',
                  'Something wen\'t wrong.',
                  'error'
                );
              }
            }
            );
          } else {
            Swal.fire(
              'Error',
              'Something wen\'t wrong.',
              'error'
            );
          }
        });
      }
    });
  }
  generateEventMessage(): EventModel[] {
    this.message = [];
    this.modify.forEach(data => {
      if (data.isModify) {
        this.message.push({
          element_name: data.element_name,
          event_message: `Modify ${data.element_name} from ${this.formTmp.get(data.form_name).value} to ${this.form.get(data.form_name).value}.`,
          form_id: '002'
        });
      }
    });
    return this.message;
  }
  canPressButton(): boolean {
    this.modify = this.compareString();
    const res = this.modify.filter(data => data.isModify);
    if (res.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}
