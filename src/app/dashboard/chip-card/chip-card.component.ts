import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

/**
 * @title Stacked chips
 */
@Component({
  selector: 'app-chip-card',
  templateUrl: 'chip-card.component.html',
  styleUrls: ['chip-card.component.scss'],
  standalone: true,
  imports: [MatChipsModule],
})
export class ChipCardComponent {
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'},
  ];
}