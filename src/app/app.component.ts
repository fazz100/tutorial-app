import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial-app';

  
  public name:string="Da Kanser"; //parent component data to be sent to the child component
  public name2:string="Fazz12";

  public leReceivedData="";


  public renderSentMessage(receivedData) //encapsulating the sent message from child component into parent's component's function like this one is not necessary. it can be directly assigned like leReceivedData=$event,
                                          // but i did this anyway for adopting encapsulation practice (because direct assignment might not work if the property is private, though i havent tried it yet)
  {
    this.leReceivedData=receivedData;

  }


  public receivedData

}
