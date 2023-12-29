import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

}
