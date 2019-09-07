import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { NgswitchDirectiveComponent } from './ngswitch-directive/ngswitch-directive.component';
import { NgforDirectiveComponent } from './ngfor-directive/ngfor-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { ServicesEmployeeDetailComponent } from './services-employee-detail/services-employee-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { RoutingNotFoundComponent } from './routing-not-found/routing-not-found.component';
import { RoutingParameterListComponent } from './routing-parameter-list/routing-parameter-list.component';
import { RoutingParameterDetailComponent } from './routing-parameter-detail/routing-parameter-detail.component';
import { ChildRoute1Component } from './child-route1/child-route1.component';
import { ChildRoute2Component } from './child-route2/child-route2.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariablesComponent,
    TwoWayBindingComponent,
    NgifDirectiveComponent,
    NgswitchDirectiveComponent,
    NgforDirectiveComponent,
    ComponentInteractionComponent,
    PipesComponent,
    ServicesComponent,
    ServicesEmployeeDetailComponent,
    ErrorHandlingComponent,
    routingComponents,
    RoutingNotFoundComponent,
    RoutingParameterListComponent,
    RoutingParameterDetailComponent,
    ChildRoute1Component,
    ChildRoute2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
