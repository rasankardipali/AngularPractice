import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicecop2Component } from './servicecop2.component';

describe('Servicecop2Component', () => {
  let component: Servicecop2Component;
  let fixture: ComponentFixture<Servicecop2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicecop2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicecop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
