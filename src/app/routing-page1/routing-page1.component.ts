import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing-page1',
  templateUrl: './routing-page1.component.html',
  styleUrls: ['./routing-page1.component.css']
})
export class RoutingPage1Component implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private router:Router

  ) { }

  ngOnInit() {
  }

  showlist()
  {

    this.router.navigate(['routing-parameter-list'],{relativeTo:this.route});
  }
}
