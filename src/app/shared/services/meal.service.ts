import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {
 private _httpClient = inject(HttpClient)
  constructor() { }
  getCategories(): Observable<any> {
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }


  getAllMeals(): Observable<any> {
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
  }


  getMealsByCategory(category: string): Observable<any> {
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  }


  getMealDetails(id: string): Observable<any> {
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
}
