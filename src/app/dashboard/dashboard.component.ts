import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list'
import { ImageCardComponent } from './image-card/image-card.component';
import { DatepickerCardComponent } from './datepicker-card/datepicker-card.component';
import { TreeCardComponent } from './tree-card/tree-card.component';
import { ChipCardComponent } from './chip-card/chip-card.component';
import { fromEvent, map, startWith } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatGridListModule,ImageCardComponent, DatepickerCardComponent, TreeCardComponent, ChipCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public settings: { cols: number, rowHeight: string } = { cols: 2, rowHeight: '100vh' };

  ngOnInit() {
    fromEvent(window, 'resize')
      .pipe(
        map(event => (event.target as any).innerWidth),
        startWith(window.innerWidth)
      ).subscribe(width => {
        this.settings.cols = width <= 768 ? 1 : 2;
        this.settings.rowHeight = width <= 768 ? '75vh' : '75vh';
      });
  }
}
