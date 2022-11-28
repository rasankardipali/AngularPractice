import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign24Component } from './assign24.component';

describe('Assign24Component', () => {
  let component: Assign24Component;
  let fixture: ComponentFixture<Assign24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assign24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assign24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
