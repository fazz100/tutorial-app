import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

 

  public a:number;
  public b:number;

  public c:string;

  public namaewa:string="";

  constructor() { }

  ngOnInit() {
  }

  public multiply()
  {
    this.c=(this.a*this.b).toString();

  }

}
