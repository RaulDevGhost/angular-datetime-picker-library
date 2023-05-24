import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-owndatetimepicker',
  templateUrl: './owndatetimepicker.component.html',
  styleUrls: ['./owndatetimepicker.component.scss'],
})
export class OwndatetimepickerComponent implements OnInit {
  date: any;
  time: any;
  placeHolder: string = 'DD-MM-YYYY';
  separator!: string;
  order: number[] = [];

  @ViewChild('calendar', { static: false }) calendar: any;
  ngOnInit() {
    this.init(this.placeHolder);
  }
  format(date: any) {
    if (!date) return null;
    const parts = [
      '' + date.getFullYear(),
      ('00' + (date.getMonth() + 1)).slice(-2),
      ('00' + date.getDate()).slice(-2),
    ];
    return (
      parts[this.order[0]] +
      this.separator +
      parts[this.order[1]] +
      this.separator +
      parts[this.order[2]]
    );
  }
  parse(value: string) {
    const parts = value ? value.replace(/[.\/]/g, '-').split('-') : [];
    const date: any =
      parts.length == 3
        ? new Date(
            parts[this.order[0]] +
              '-' +
              parts[this.order[1]] +
              '-' +
              parts[this.order[2]]
          )
        : null;
    return date && date.getTime && date.getTime() ? date : null;
  }
  tryFormat(value: string) {
    const date = this.parse(value);
    this.date = date ? this.format(date) : value;
  }
  onOpen() {
    if (this.date) {
      const date = this.parse(this.date);
      if (date) this.calendar.activeDate = date;
    }
  }
  init(placeholder: string) {
    this.separator = placeholder.replace(/[YMD]/g, '').substr(0, 1);
    const parts = placeholder.replace(/[.\/]/g, '-').split('-');
    this.order[0] = parts.indexOf('YYYY');
    this.order[1] = parts.indexOf('MM');
    this.order[2] = parts.indexOf('DD');
  }

  onKey(event: any) {
    const inputValue = event.target.value;
    console.log(inputValue);
    this.time = inputValue;
  }
}
