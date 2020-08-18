import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL = environment.URL + '/employee';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  addEmployee(employee: any): Observable<HttpResponse<Employee>> {
    return this.http.post<Employee>(this.URL, employee, { observe: 'response' });
    // return console.log('successfully add employee');
  }

  getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(this.URL + `/${id}`);
  }

  modifyEmployee(id, employee: any): Observable<HttpResponse<Employee>> {
    return this.http.put<Employee>(this.URL + `/${id}`, employee, { observe: 'response' });
  }
  removeEmployee(id): Observable<any> {
    return this.http.delete<Employee>(this.URL + `/${id}`);
  }
}
