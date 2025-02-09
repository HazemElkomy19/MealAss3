import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"",loadComponent: ()=> import("./features/pages/home/home.component").then(c=>c.HomeComponent)
  }
  ,

  {
    path:"category/:name",loadComponent: ()=> import("./features/pages/home/home.component").then(c=>c.HomeComponent)
  }
  ,
  {
    path:"meal/:id",loadComponent: ()=> import("./features/pages/meal-detail/meal-detail.component").then(c=>c.MealDetailComponent)
  }
  ,
  {
    path:"**",loadComponent: ()=> import("./core/layout/not-found/not-found.component").then(c=>c.NotFoundComponent)
  }
];
