import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { product } from '../data';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private product:ProductService,private route:Router){}
  addProductMessage: string | undefined;


  AddProduct:FormGroup = new FormGroup({
    name : new FormControl(),
    price:new FormControl(),
    category:new FormControl(),
    color:new FormControl(),
    image:new FormControl(),
    description:new FormControl(),
    quantity:new FormControl(),
    productId:new FormControl()
  })


  // Product(){
  //   // this.product.saveProduct(this.AddProduct.value).subscribe((res)=> console.log(res))
  // }



  submitProduct(data:product) {
    this.product.addProduct(data).subscribe((res) => {
      console.log(res);
      if (res) {
        
        alert(
          this.addProductMessage = 'Product is added successfully'
        )
       this.route.navigate(['seller-home'])
      }
      
    });

    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
  }
}
