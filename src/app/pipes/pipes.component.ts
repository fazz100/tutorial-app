import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name="Da kanser";
  public message="pak yu ka mga sampu";
  public person={
    "firstName":"Con D",
    "lastName": "Oriano"
  }

  public date=new Date();
  
  constructor() { }

  ngOnInit() {
  }

}
