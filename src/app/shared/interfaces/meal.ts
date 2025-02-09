
export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface CategoriesResponse {
  categories: Category[];
}


export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions?: string;
  strYoutube?: string;
  strSource?: string;
  strArea?:string
  ingredients: { ingredient: string; measurement: string }[];
}

export interface MealResponse {
  meals: Meal[];
}



// --- Meal Summary Interfaces (For Filter API) ---
export interface MealSummary {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface MealSummaryResponse {
  meals: MealSummary[];
}
