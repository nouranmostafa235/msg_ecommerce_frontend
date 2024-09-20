import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-men-wear',
  templateUrl: './men-wear.component.html',
  styleUrls: ['./men-wear.component.css']
})
export class MenWearComponent implements OnInit {
  constructor(private service: ProductsService) { }
  products: any

 searchTerm:string=""
  ngOnInit(): void {
    this.service.productsCategory().subscribe({
      next: (response) => {
        this.products = response.data.Men
        console.log(this.products);
      }
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
