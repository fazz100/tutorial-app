import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing-parameter-list',
  templateUrl: './routing-parameter-list.component.html',
  styleUrls: ['./routing-parameter-list.component.css']
})
export class RoutingParameterListComponent implements OnInit {

  public selectedId:number;

  public persons=[
    {"id":1,"name":"Con D Oriano", "age":99},
    {"id":2,"name":"Condoriano", "age":99},
    {"id":3,"name":"Go D Usopp", "age":18},
    {"id":4,"name":"Usopp", "age":20}
  ];

  onSelect(p)
  {
    //navigate from code
    //this.router.navigate(['/routing-parameter-list',p.id]); //absolute tag - begins with a forward slash - not very flexible. if it's route(the word "routing-parameter-list") is changed in the routing module, it needs to be changed here as well (like routing-parameter-list to routing-list)
    this.router.navigate([p.id], {relativeTo: this.route});
  }

  public isSelected(personid)
  {
    return personid.id ===this.selectedId;

  }

  constructor(
    private router:Router,
    private route: ActivatedRoute
    ) 
    {
      
    }

  ngOnInit() {

    /*for retrieving optional parameter, use the parammap */
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.selectedId=id;
      });
  }

  


}
