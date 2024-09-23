import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductbyIdComponent } from './productby-id/productby-id.component';

const routes: Routes = [
  {path:"",component:ProductbyIdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
