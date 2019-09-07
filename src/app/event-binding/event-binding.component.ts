import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public x:number=3;
  public y:number=2;
  public ans:string="";

  public Add()
  {
    this.ans=(3+2).toString();

  }
  
  constructor() { }

  ngOnInit() {
  }

}
