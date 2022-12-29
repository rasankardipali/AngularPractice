import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sales10listComponent } from './sales10list.component';

describe('Sales10listComponent', () => {
  let component: Sales10listComponent;
  let fixture: ComponentFixture<Sales10listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sales10listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sales10listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
