import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingMachinComponent } from './washing-machin.component';

describe('WashingMachinComponent', () => {
  let component: WashingMachinComponent;
  let fixture: ComponentFixture<WashingMachinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashingMachinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingMachinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
