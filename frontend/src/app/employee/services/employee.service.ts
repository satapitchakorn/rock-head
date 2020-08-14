import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  addEmployee(): void {
    return console.log('successfully add employee');
  }

  getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/employee/' + id);
  }

  modifyEmployee(): void {
    return console.log('successfully modify employee');
  }
  removeEmployee(): void {
    return console.log('successfully remove employee');
  }
}
