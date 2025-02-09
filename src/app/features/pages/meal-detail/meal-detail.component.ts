import { Component, inject, OnInit } from '@angular/core';
import { Meal } from '../../../shared/interfaces/meal';
import { MealService } from '../../../shared/services/meal.service';
import { ActivatedRoute } from '@angular/router';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.scss'],
  imports:[NgClass,NgForOf]
})
export class MealDetailComponent implements OnInit {
  meal!: Meal;
  loading: boolean = false;


  private _mealService = inject(MealService);
  private _route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if (id) {
      this.loading = true;
      this._mealService.getMealDetails(id).subscribe({
        next: (data) => {
          if (data.meals && data.meals.length > 0) {

            this.meal = this.transformMealData(data.meals[0]);
          }
          this.loading = false;
        },
        error: (err) => {
          console.error('Error loading meal details:', err);
          this.loading = false;
        },
        complete: () => {
          console.log('Meal detail loading complete');
        }
      });
    }
  }


  private transformMealData(meal: any): Meal {
    const ingredients: { ingredient: string; measurement: string }[] = [];


    for (let i = 1; i <= 8; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measurement = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({ ingredient, measurement: measurement || "" });
      }
    }

    return {
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb,
      strInstructions: meal.strInstructions,
      strYoutube: meal.strYoutube,
      strSource: meal.strSource,
      ingredients,
    };
  }
  trackByIndex(index: number, item: any): number {
    return index;
  }
}
