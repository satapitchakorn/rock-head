import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ContentModel } from '../models/content-model';
import { environment } from 'src/environments/environment';
import { LogBody } from '@app/log/models/log-body';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {
  URL = environment.URL + '/log';
  adminNo = 251181;
  constructor(private http: HttpClient) { }
  getAllLog(): Observable<ContentModel> {
    return this.http.get<ContentModel>(this.URL
    );
  }
  addLog(log: LogBody): Observable<any> {
    return this.http.post<any>(this.URL, log, { observe: 'response' });
  }
  getAdminNo(): number {
    return this.adminNo;
  }
  setAdminNo(adminNo: number): void {
    this.adminNo = adminNo;
  }
}
