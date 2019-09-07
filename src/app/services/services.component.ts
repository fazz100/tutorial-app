import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public employees=[];
  public errorMsg:string="";


  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(d=>
      {
        this.employees=d;
      },
      err =>{
        this.errorMsg=err;
      }
      );
  }

}
