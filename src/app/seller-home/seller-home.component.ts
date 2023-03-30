import { Component } from '@angular/core';
import { product } from '../data';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {

constructor(private product:ProductService) { 
  this.AllProduct()
}
  
productList:any|product[];
productMessage:string|undefined;

  AllProduct() {
    this.product.getProduct().subscribe((result) => {
      if (result) {
        this.productList = result;
      }
    });
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
         alert( this.productMessage = 'Product is deleted')

        this.AllProduct();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }
}
