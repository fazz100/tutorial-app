import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  public textSuccess:string="text-success";
  public textDanger:string="text-danger";
  public hasError:boolean = false;
  public isSpecial:boolean = true;
  public highlightColor:string="orange";

  public messageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special":this.isSpecial
  }
  
  constructor() { }

  ngOnInit() {
  }

}
