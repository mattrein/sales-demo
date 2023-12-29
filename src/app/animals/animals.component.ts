import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { Animal } from './animal.model';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './animal-details-dialog/animal-details-dialog.component';
import { fromEvent, map, startWith } from 'rxjs';



@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [MatGridListModule, MatListModule, AnimalDetailsComponent],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.scss'
})
export class AnimalsComponent {
  public selectedAnimal: Animal | null = null;
  public animals: Animal[] = [
    { name: 'Zeus', species: 'Dog', description: 'A good doggo.' },
    { name: 'Charlie', species: 'Dog', description: 'A polite pup.' },
    { name: 'Sammy', species: 'Cat', description: 'A house cat' },
  ];

  public useDialog: boolean = false;
  public cols: number = 2;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    fromEvent(window, 'resize')
      .pipe(
        map(event => (event.target as any).innerWidth),
        startWith(window.innerWidth)
      ).subscribe(width => {
        this.useDialog = width <= 768 ? true : false;
        this.cols = width <= 768 ? 1 : 2;
      });
  }

  public selectAnimal(animal: Animal) {
    this.selectedAnimal = animal;
    if (this.useDialog) {
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { animal: this.selectedAnimal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.selectedAnimal = result;
    });
  }
}


