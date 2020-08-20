import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Employee } from '@app/employee/models/employee';
import { EmployeeService } from '@app/employee/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-action-list',
  templateUrl: './event-action-list.component.html',
  styleUrls: ['./event-action-list.component.css']
})
export class EventActionListComponent implements OnInit {
  searchFilter = '';
  column = ['id', 'firstname', 'lastname', 'position', 'email', 'action'];
  listEmployee: Employee[] = [];
  dataSource = new MatTableDataSource<Employee>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.empService.getAllEmployee().subscribe((content) => {
      this.listEmployee = content.filter(data => data.status);
      this.dataSource = new MatTableDataSource<Employee>(this.listEmployee);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(search: any): void {
    if (search === '') {
      this.dataSource.filter = '';
    } else {
      this.dataSource.filterPredicate =
        (data: Employee, filter: string) => {
          return (data.employee_no.toString().indexOf(filter) !== -1 || data.email.indexOf(filter) !== -1 ||
            data.firstname.toLowerCase().includes(filter) || data.lastname.toLowerCase().includes(filter) ||
            data.position.toLowerCase().includes(filter));
        };
      search = search.trim();
      search = search.toLowerCase();
      this.dataSource.filter = search;
    }
  }
  onEdit(id): void {
    this.router.navigateByUrl(`/form/modify/${id}`);
  }
  onDelete(id): void {
    this.router.navigateByUrl(`/form/remove/${id}`);
  }
}