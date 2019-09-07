import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  public textSuccess:string="text-success";
  public textDanger:string="text-danger";
  public hasError:boolean = false;
  public isSpecial:boolean = true;
  public highlightColor:string="orange";


  public messageStyle ={
    color:"purple",
    fontStyle:"normal",
    textDecoration:"line-through",
    fontWeight:"bolder"

  }

  toggleError()
  {
    if(this.hasError)
    {

      this.hasError=false;
      
    }
    else
    {

      this.hasError=true;
    }
    
  }

  constructor() { }

  ngOnInit() {
  }

}
