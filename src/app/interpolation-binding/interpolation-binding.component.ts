import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent implements OnInit {

  public name:string ="Billy";
  public siteURL:string = window.location.href;
  
  constructor() { }

  ngOnInit() {
    this.name="totoy brown";
  }

  greetUser()
  {
    return "Hoi " + name;

  }

}
