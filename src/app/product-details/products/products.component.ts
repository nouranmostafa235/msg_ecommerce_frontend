import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private service:ProductsService, private route:ActivatedRoute){}
  imgSrc:string='assets/imgs/img1.jpg'
  userId:any
  data:any
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.userId=params['id']
    })
    this.service.getElementById(this.userId).subscribe({
      next:(response)=>{
       this.data=response.data
       console.log(this.data);
       
      }
    })
  }
 onImageClick(event:any){
  this.imgSrc=event.target.src
  console.log(event.target.src);
  
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
