import { Component } from '@angular/core';
import { MealComponent } from '../../../shared/components/meal/meal.component';
import { NavbarComponent } from '../../../core/layout/navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [MealComponent,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
