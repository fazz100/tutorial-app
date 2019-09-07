import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-directive',
  templateUrl: './ngswitch-directive.component.html',
  styleUrls: ['./ngswitch-directive.component.css']
})
export class NgswitchDirectiveComponent implements OnInit {

  public color:string="violet";
  public blue:string="blue";
  public red:string="red";
  public green:string="green";
  public default={color:"violet"}

  

  public determineColor()
  {

  }

  constructor() { }

  ngOnInit() {
  }

}
