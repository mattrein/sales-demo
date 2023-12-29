import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss'
})
export class ImageCardComponent {

}
