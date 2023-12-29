import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimalsComponent } from './animals/animals.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FoodsComponent } from './foods/foods.component';
import { ColorsComponent } from './colors/colors.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'home', component: HomeComponent,
        children:
            [
                {path: 'dashboard', component: DashboardComponent},
                {path: 'animals', component: AnimalsComponent},
                {path: 'calendar', component: CalendarComponent},
                {path: 'foods', component: FoodsComponent},
                {path: 'colors', component: ColorsComponent}
            ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
