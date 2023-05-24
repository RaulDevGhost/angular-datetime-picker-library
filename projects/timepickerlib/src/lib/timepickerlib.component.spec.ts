import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerlibComponent } from './timepickerlib.component';

describe('TimepickerlibComponent', () => {
  let component: TimepickerlibComponent;
  let fixture: ComponentFixture<TimepickerlibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimepickerlibComponent]
    });
    fixture = TestBed.createComponent(TimepickerlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
