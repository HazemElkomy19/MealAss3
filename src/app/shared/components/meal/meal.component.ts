




import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../interfaces/meal';

@Component({
  selector: 'app-meal',

  imports: [RouterLink],
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  meals!: Meal[];
  loading: boolean = false;
  category: string | null = null;


  private _mealService = inject(MealService);
  private _route = inject(ActivatedRoute);

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.category = params.get('name');
      this.getMeals();
    });
  }

  getMeals(): void {
    this.loading = true;
    if (this.category) {
      this._mealService.getMealsByCategory(this.category).subscribe({
        next: (res) => {
          console.log(res.meals);
          this.meals = res.meals;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        },
        complete: () => {
          console.log('complete');
        }
      });
    } else {
      this._mealService.getAllMeals().subscribe({
        next: (res) => {
          console.log(res.meals);
          this.meals = res.meals;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        },
        complete: () => {
          console.log('complete');
        }
      });
    }
  }
}

