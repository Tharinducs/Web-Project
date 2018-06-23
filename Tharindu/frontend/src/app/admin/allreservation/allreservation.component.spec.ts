import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreservationComponent } from './allreservation.component';

describe('AllreservationComponent', () => {
  let component: AllreservationComponent;
  let fixture: ComponentFixture<AllreservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllreservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
