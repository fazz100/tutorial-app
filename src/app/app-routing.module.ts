import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingPage1Component } from './routing-page1/routing-page1.component';
import { RoutingPage2Component } from './routing-page2/routing-page2.component';
import { RoutingNotFoundComponent } from './routing-not-found/routing-not-found.component';
import { RoutingParameterListComponent } from './routing-parameter-list/routing-parameter-list.component';
import { RoutingParameterDetailComponent } from './routing-parameter-detail/routing-parameter-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/routed-page1', pathMatch: 'full'},
  
  
  {
    path: 'routed-page1', 
    component:RoutingPage1Component,
    children:
    [
      {path: 'routing-parameter-list', component:RoutingParameterListComponent},
      {path: 'routing-parameter-list/:id', component:RoutingParameterDetailComponent}
    ]
  
  },
  {path: 'routed-page2', component:RoutingPage2Component},
  {path: '**', component:RoutingNotFoundComponent}//must always be at the bottom
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
[
  RoutingPage1Component,
  RoutingPage2Component,
  RoutingParameterListComponent,
  RoutingParameterDetailComponent,
  RoutingNotFoundComponent
];
