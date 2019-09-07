import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  templateUrl: './ngif-directive.component.html',
  styleUrls: ['./ngif-directive.component.css']
})
export class NgifDirectiveComponent implements OnInit {

  public isBasic:boolean=true;
  public isSyn:boolean=true;

  public toggleSynAck()
  {

    if(this.isSyn==true)
    {
      this.isSyn=false;
    }
    else
    {
      this.isSyn=true;

    }

  }

  constructor() { }

  ngOnInit() {
  }

}
