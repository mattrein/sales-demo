import { Component, Input, Output } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-details',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './animal-details.component.html',
  styleUrl: './animal-details.component.scss'
})
export class AnimalDetailsComponent {
  @Input('animal') animal!: Animal;
}
