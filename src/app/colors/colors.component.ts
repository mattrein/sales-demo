import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { fromEvent, map, startWith } from 'rxjs';

export interface Color {
  name: string;
  order: number;
  swatch: number;
  hex: string;
}

const COLOR_DATA: Color[] = [
  {order: 1, name: 'Primary', swatch: 1.0079, hex: '#3880ff'},
  {order: 2, name: 'Secondary', swatch: 4.0026, hex: '#3dc2ff'},
  {order: 3, name: 'Tertiary', swatch: 6.941, hex: '#5260ff'},
  {order: 4, name: 'Success', swatch: 9.0122, hex: '#2dd36f'},
  {order: 5, name: 'Warning', swatch: 10.811, hex: '#ffc409'},
  {order: 6, name: 'Danger', swatch: 12.0107, hex: '#eb445a'},
  {order: 7, name: 'Light', swatch: 14.0067, hex: '#f4f5f8'},
  {order: 8, name: 'Medium', swatch: 15.9994, hex: '#92949c'},
  {order: 9, name: 'Dark', swatch: 18.9984, hex: '#222428'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-colors',
  styleUrls: ['colors.component.scss'],
  templateUrl: 'colors.component.html',
  standalone: true,
  imports: [MatTableModule],
})
export class ColorsComponent {
  displayedColumns: string[] = ['order', 'name', 'swatch', 'hex'];
  dataSource = COLOR_DATA;

  ngOnInit() {
    fromEvent(window, 'resize')
      .pipe(
        map(event => (event.target as any).innerWidth),
        startWith(window.innerWidth)
      ).subscribe(width => {
        if(width <= 768) {
          this.displayedColumns = ['name', 'swatch'];
        } else {
          this.displayedColumns = ['order', 'name', 'swatch', 'hex'];
        }
      });
  }
}
