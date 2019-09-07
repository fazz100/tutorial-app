import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingNotFoundComponent } from './routing-not-found.component';

describe('RoutingNotFoundComponent', () => {
  let component: RoutingNotFoundComponent;
  let fixture: ComponentFixture<RoutingNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
