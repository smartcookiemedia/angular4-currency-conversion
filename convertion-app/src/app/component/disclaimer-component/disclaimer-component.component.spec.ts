import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerComponentComponent } from './disclaimer-component.component';

describe('DisclaimerComponentComponent', () => {
  let component: DisclaimerComponentComponent;
  let fixture: ComponentFixture<DisclaimerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
