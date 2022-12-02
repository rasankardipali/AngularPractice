import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignmrnt1decComponent } from './assignmrnt1dec.component';

describe('Assignmrnt1decComponent', () => {
  let component: Assignmrnt1decComponent;
  let fixture: ComponentFixture<Assignmrnt1decComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignmrnt1decComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignmrnt1decComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
