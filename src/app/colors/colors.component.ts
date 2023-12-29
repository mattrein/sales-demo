import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { fromEvent, map, startWith } from 'rxjs';

export interface Color {
  name: string;
  colorId: number;
  swatch: number;
  hex: string;
  shade?: string;
  tint?: string;
}

const COLOR_DATA: Color[] = [
  {colorId: 1, name: 'Primary', swatch: 1.0079, hex: '#3880ff'},
  {colorId: 2, name: 'Secondary', swatch: 4.0026, hex: '#3dc2ff'},
  {colorId: 3, name: 'Tertiary', swatch: 6.941, hex: '#5260ff'},
  {colorId: 4, name: 'Success', swatch: 9.0122, hex: '#2dd36f'},
  {colorId: 5, name: 'Warning', swatch: 10.811, hex: '#ffc409'},
  {colorId: 6, name: 'Danger', swatch: 12.0107, hex: '#eb445a'},
  {colorId: 7, name: 'Light', swatch: 14.0067, hex: '#f4f5f8'},
  {colorId: 8, name: 'Medium', swatch: 15.9994, hex: '#92949c'},
  {colorId: 9, name: 'Dark', swatch: 18.9984, hex: '#222428'},
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
  displayedColumns: string[] = ['colorId', 'name', 'swatch', 'hex', 'shade', 'tint'];
  dataSource = COLOR_DATA.map(c => {
      let {shade, tint} = this.shadeAndTint(c.hex);
      c.shade = shade;
      c.tint = tint;
      return c
    });

  ngOnInit() {
    fromEvent(window, 'resize')
      .pipe(
        map(event => (event.target as any).innerWidth),
        startWith(window.innerWidth)
      ).subscribe(width => {
        if(width <= 768) {
          this.displayedColumns = ['name', 'swatch'];
        } else {
          this.displayedColumns = ['colorId', 'name', 'swatch', 'hex', 'shade', 'tint'];
        }
      });
  }

  updateColors(event: Event, colorId: number) {
    const newColor = (event.target as HTMLInputElement).value;
    let index = this.dataSource.findIndex(c => c.colorId === colorId);
    this.dataSource[index].hex = newColor;
    let {shade, tint} = this.shadeAndTint(this.dataSource[index].hex);
    this.dataSource[index].shade = shade;
    this.dataSource[index].tint = tint;
  }

  shadeAndTint(color: string, amount: number = 60) {
    const colorValue = parseInt(color.slice(1), 16);
    const r = (colorValue >> 16) & 255;
    const g = (colorValue >> 8) & 255;
    const b = colorValue & 255;

    const shade = "#" + ((1 << 24) + (Math.max(0, r - amount) << 16) + (Math.max(0, g - amount) << 8) + Math.max(0, b - amount)).toString(16).slice(1);
    const tint = "#" + ((1 << 24) + (Math.min(255, r + amount) << 16) + (Math.min(255, g + amount) << 8) + Math.min(255, b + amount)).toString(16).slice(1);

    return { shade, tint };
}
}
