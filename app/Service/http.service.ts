import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(path: any) : Observable<any>{
    return this.http.get(path);
  }
  post(path: any, data: any) : Observable<any>{
    return this.http.post<any>(path, data);
  }
  delete(path: any) : Observable<any>{
    return this.http.delete(path);
  }
  put(path: any, data: any) : Observable<any>{
    return this.http.put<any>(path, data);
  }
}
