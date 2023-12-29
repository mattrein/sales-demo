import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { fromEvent, map, startWith } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public settings: { cols: number, rowHeight: string } = { cols: 2, rowHeight: '100vh' };


  constructor(private router: Router) { }

  ngOnInit() {
    fromEvent(window, 'resize')
      .pipe(
        map(event => (event.target as any).innerWidth),
        startWith(window.innerWidth)
      ).subscribe(width => {
        this.settings.cols = width <= 768 ? 1 : 2;
        this.settings.rowHeight = width <= 768 ? '50vh' : '100vh';
      });
  }

  public onSubmit() {
    // goto to home page
    this.router.navigate(['home', 'dashboard']);
  }
}
