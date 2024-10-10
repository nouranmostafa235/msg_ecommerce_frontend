import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NavSharedComponent } from './nav-shared/nav-shared.component';
import { FooterSharedComponent } from './footer-shared/footer-shared.component';


@NgModule({
  declarations: [
    NavSharedComponent,
    FooterSharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    NavSharedComponent,
    FooterSharedComponent
  ]
})
export class SharedModule { }
