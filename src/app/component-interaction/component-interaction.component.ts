import { Component, OnInit,Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input()                  //first method of taking input from parent component
  public parentData;

  @Input("secondParentData") //second way to do taking input from parent component
  public secondName;

  @Output()
  public childEvent=new EventEmitter();


  public messageToParent:string="";

  public emitChildEvent()
  {
    this.childEvent.emit(this.messageToParent);
  }


  constructor() { }

  ngOnInit() {
  }

}
