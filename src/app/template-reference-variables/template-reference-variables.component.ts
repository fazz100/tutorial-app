import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  templateUrl: './template-reference-variables.component.html',
  styleUrls: ['./template-reference-variables.component.css']
})
export class TemplateReferenceVariablesComponent implements OnInit {

  public Add(x:string,y:string)
  {
    console.log(eval(x) + eval(y))
  }
  
  constructor() { }

  ngOnInit() {
  }

}
