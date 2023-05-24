import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDatepickerTimeHeaderModule } from '../../mat-datepicker-time-header/src/lib/mat-datepicker-time-header.module';
import { OwndatetimepickerComponent } from './components/owndatetimepicker/owndatetimepicker.component';
import { TimepickerlibModule } from 'timepickerlib';

@NgModule({
  declarations: [AppComponent, OwndatetimepickerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerTimeHeaderModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    TimepickerlibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
