import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { Device } '../models/device';
import { Observable, throwError} from 'rxjs';
import { retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseApi = 'http://localhost:3001';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(public http: HttpClient) { }

  handleError(error: HttpErrorResponse){

    return throwError('Error with API');
  }

  public getDevices(): Observable<any>{
    return this.http.get(`${this.baseApi}/devices`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  public getDevice(id: string): Observable<any>{
    return this.http.get(`${this.baseApi}/devices/${id}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  public delDevice(id: string): Observable<any>{
    return this.http.delete(`${this.baseApi}/devices/delete/${id}`,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  public addDevice(item: any): Observable<any>{
    return this.http.post(`${this.baseApi}/devices/create`, 
      JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
// 