import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public isDisabled:boolean=true;
  public textValue:string="bakulaw";
  public thirdText:string="this is the third text";

  constructor() { }

  ngOnInit() {
  }

}
