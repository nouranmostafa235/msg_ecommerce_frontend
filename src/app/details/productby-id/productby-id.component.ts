import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-productby-id',
  templateUrl: './productby-id.component.html',
  styleUrls: ['./productby-id.component.css']
})
export class ProductbyIdComponent implements OnInit{
constructor(private service:ProductsService, private route:ActivatedRoute){}
selectedImage:string='assets/imgs/img1.jpg'
userId:any
data:any
ngOnInit(): void {
  this.route.queryParams.subscribe(params=>{this.userId=params['id']}) 
  this.service.getElementById(this.userId).subscribe({
    next:(res)=>{
      this.data=res.data
      console.log(this.data);
    }
  })
}
onImageClick(event:any){
  this.selectedImage = event.target.src;  
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
