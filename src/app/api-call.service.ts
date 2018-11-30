import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';


@Injectable({
  providedIn: 'root'
})

export class ApiCallService {


  dataUrl = 'https://jtd.alwaysdata.net/data/jtd_papet/_all_docs?include_docs=true';

  constructor(private http: HttpClient) {}


  getEvent(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }

  postEvent(data): Observable<any>{
    return this.http.post(this.dataUrl,data,);
  }
   

}
