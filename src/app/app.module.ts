import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { RouterModule, ROUTES } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from './Products/all-products/all-products.component';
import { DefaultProductsComponent } from './Products/default-products/default-products.component';
import { MenWearComponent } from './Products/men-wear/men-wear.component';
import { WomenWearComponent } from './Products/women-wear/women-wear.component';
import { KidWearComponent } from './Products/kid-wear/kid-wear.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    AllProductsComponent,
    DefaultProductsComponent,
    MenWearComponent,
    WomenWearComponent,
    KidWearComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
