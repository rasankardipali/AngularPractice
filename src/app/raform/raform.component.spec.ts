import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaformComponent } from './raform.component';

describe('RaformComponent', () => {
  let component: RaformComponent;
  let fixture: ComponentFixture<RaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
