import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign25ngForComponent } from './assign25ng-for.component';

describe('Assign25ngForComponent', () => {
  let component: Assign25ngForComponent;
  let fixture: ComponentFixture<Assign25ngForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assign25ngForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assign25ngForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
