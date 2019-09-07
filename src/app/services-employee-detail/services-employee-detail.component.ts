import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-services-employee-detail',
  templateUrl: './services-employee-detail.component.html',
  styleUrls: ['./services-employee-detail.component.css']
})
export class ServicesEmployeeDetailComponent implements OnInit {

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
