import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwndatetimepickerComponent } from './owndatetimepicker.component';

describe('OwndatetimepickerComponent', () => {
  let component: OwndatetimepickerComponent;
  let fixture: ComponentFixture<OwndatetimepickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwndatetimepickerComponent]
    });
    fixture = TestBed.createComponent(OwndatetimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
