import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-productby-id',
  templateUrl: './productby-id.component.html',
  styleUrls: ['./productby-id.component.css']
})
export class ProductbyIdComponent implements OnInit{
  constructor(private service:ProductsService){}
  selectedImage:string='assets/imgs/img2.jpg'
ngOnInit(): void {
  this.service.getProducts().subscribe({
    next:(res)=>{
      console.log(res,"kkdkkd");
      
    }
  })
}
onImageClick(event:any){
  this.selectedImage = event.target.src;
}
}
