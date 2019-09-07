import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import {throwError as observableThrowError, Observable } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url="assets/data/employees.json";


  constructor(private http: HttpClient) { }

  public getEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url).pipe(
      catchError(err =>this.errorHandler(err))
        );
  }
  
  //observableThrowError is an alias
  public errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
}
