import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-datepicker-card',
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './datepicker-card.component.html',
  styleUrl: './datepicker-card.component.scss'
})
export class DatepickerCardComponent {
  selected: Date | null = null;

}