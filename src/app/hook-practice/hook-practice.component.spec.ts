import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HookPracticeComponent } from './hook-practice.component';

describe('HookPracticeComponent', () => {
  let component: HookPracticeComponent;
  let fixture: ComponentFixture<HookPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HookPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HookPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
