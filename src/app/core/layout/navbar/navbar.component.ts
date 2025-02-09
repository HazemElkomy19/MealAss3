import { Component, OnInit, inject } from '@angular/core';
import { Category } from '../../../shared/interfaces/meal';
import { MealService } from '../../../shared/services/meal.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  categories!:Category[];
  private _mealService = inject(MealService)
  ngOnInit(): void {
      this.getCategories();
  }
  getCategories(){
    this._mealService.getCategories().subscribe({
      next :(res)=>{
        console.log(res.categories);
        this.categories=res.categories

      },
      error :(err)=>{
        console.log(err);
      },
      complete: ()=>{
        console.log("complete");
      }
    })
  }
}
