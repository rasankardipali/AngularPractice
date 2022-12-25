import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderpipeComponent } from './genderpipe.component';

describe('GenderpipeComponent', () => {
  let component: GenderpipeComponent;
  let fixture: ComponentFixture<GenderpipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
