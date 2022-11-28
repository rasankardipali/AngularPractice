import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign25Component } from './assign25.component';

describe('Assign25Component', () => {
  let component: Assign25Component;
  let fixture: ComponentFixture<Assign25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assign25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assign25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
