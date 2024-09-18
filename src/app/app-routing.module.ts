import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { AllProductsComponent } from './Products/all-products/all-products.component';
import { DefaultProductsComponent } from './Products/default-products/default-products.component';
import { MenWearComponent } from './Products/men-wear/men-wear.component';
import { WomenWearComponent } from './Products/women-wear/women-wear.component';
import { KidWearComponent } from './Products/kid-wear/kid-wear.component';

const routes: Routes = [
  {path:"homePage",component:HomePageComponent},
  {path:"",redirectTo:"homePage",pathMatch:"full"},
  {path:"products",component:AllProductsComponent,
    children:[
      {path:"",component:DefaultProductsComponent},
      {path:"menWear", component:MenWearComponent},
      {path:"womenWear", component:WomenWearComponent},
      {path:"kidWear", component:KidWearComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
