import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavSharedComponent } from './nav-shared/nav-shared.component';


@NgModule({
  declarations: [
    NavSharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    NavSharedComponent
  ]
})
export class SharedModule { }
