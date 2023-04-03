import { Component } from '@angular/core';
import { product } from '../data';
import { ProductService } from '../service/product.service';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {

constructor(private product:ProductService, private activerout:ActivatedRoute) { 
  this.AllProduct()
  activerout.params.subscribe(params=>this.productList=params)  


}

pen=faPen;
trash=faTrash
productList:any|product[];

  AllProduct() {
    this.product.getProduct().subscribe((res) => this.productList = res)
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((res) => {
      if (res) {
         alert('Product is deleted')

        this.AllProduct();
      }
    });
  }

  updateProduct(id:number)
  {
    this.product.updateAllProduct(id,this.productList).subscribe((res:any)=>this.productList.setValue(res))
  }


}
