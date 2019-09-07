import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  public employees=[];
  public errorMsg:string="";


  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(d=>
      {
        this.employees=d;

      },
      e =>{
        this.errorMsg=e;
      }
      );
  }


  

}
