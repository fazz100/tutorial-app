import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingParameterDetailComponent } from './routing-parameter-detail.component';

describe('RoutingParameterDetailComponent', () => {
  let component: RoutingParameterDetailComponent;
  let fixture: ComponentFixture<RoutingParameterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingParameterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingParameterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
