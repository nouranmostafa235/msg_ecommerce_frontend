import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details-routing.module';
import { ProductbyIdComponent } from './productby-id/productby-id.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ProductbyIdComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule
  ]
})
export class DetailsModule { }
