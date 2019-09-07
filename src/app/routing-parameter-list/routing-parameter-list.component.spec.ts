import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingParameterListComponent } from './routing-parameter-list.component';

describe('RoutingParameterListComponent', () => {
  let component: RoutingParameterListComponent;
  let fixture: ComponentFixture<RoutingParameterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingParameterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingParameterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
