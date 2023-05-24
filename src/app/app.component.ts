import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDatepickerTimeHeaderComponent } from 'mat-datepicker-time-header/src/lib/mat-datepicker-time-header.component';
import { TimepickerlibComponent } from 'timepickerlib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form1 = new FormGroup({
    date: new FormControl(),
    time: new FormControl(),
  });

  constructor() {
    //this.form1.valueChanges.subscribe(console.log);
    //setInterval((ctrl: AbstractControl) => ctrl.setValue(ctrl.value === '09:00' ? '13:00' : '09:00'), 1000, this.form1.get('time'))
  }

  get changeDetection() {
    console.log('Checking the view');
    return true;
  }

  addMovie() {
    console.log(this.form1.value);
  }
  timeHeader = MatDatepickerTimeHeaderComponent;
  testPicker = TimepickerlibComponent;
}
