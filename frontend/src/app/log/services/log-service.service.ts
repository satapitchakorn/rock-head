import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ContentModel } from '../models/content-model';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  constructor( private http: HttpClient) { }
  getAllLog(): Observable<ContentModel>{
    return this.http.get<ContentModel>(
      'https://backend-rockhead.herokuapp.com/api/v1/log'
    );
  }
}
