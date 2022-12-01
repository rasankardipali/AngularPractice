import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign1decComponent } from './assign1dec.component';

describe('Assign1decComponent', () => {
  let component: Assign1decComponent;
  let fixture: ComponentFixture<Assign1decComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assign1decComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assign1decComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
