import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, ParamMap } from '@angular/router';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-routing-parameter-detail',
  templateUrl: './routing-parameter-detail.component.html',
  styleUrls: ['./routing-parameter-detail.component.css']
})
export class RoutingParameterDetailComponent implements OnInit {

  public personId:number;
  constructor(
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    /*
    snapshots has drawbacks because selecting other id using next and previous doesnt redo the ngoninit,
    the component is not recreated. we use the one below instead, which is the parammap
    let id=parseInt(this.route.snapshot.paramMap.get('id'));//get parameter from the url
    this.personId=id;
    */

    this.route.paramMap.subscribe((params: ParamMap)=>{
    let id = parseInt(params.get('id'));
    this.personId=id;

    })
  }

  public goPrevious(){
    let previousId=this.personId-1;
    //this.router.navigate(['/routing-parameter-list',previousId])
    this.router.navigate(['../',previousId],{relativeTo: this.route})
  }

  public goNext(){
    let nextId=this.personId+1;
    //this.router.navigate(['/routing-parameter-list',nextId])
    this.router.navigate(['../',nextId],{relativeTo: this.route})
  }

  public goBack(){
    //this is the optional parameter part, in case you want to send back the current id held within personId,
    // and manipulate the id from there (apply custom logic to it, like to highlight the button it was connected to)
    let id=this.personId;
    //this.router.navigate(['/routing-parameter-list',{"id":id}]) 
    this.router.navigate(['../',{"id":id}],{relativeTo: this.route})
  }
}
