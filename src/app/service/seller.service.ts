import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import  { login, product, signUp } from '../data';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient,private route:Router) { }

  sellerlog(body:login){
    return this.http.post(`http://localhost:3000/seller-login`,body)
  }
  
  sellerSign(body:signUp){
   return this.http.post(`http://localhost:3000/seller-sign`,body)
    
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/product/${id}`);
  }

  getProduct(id: string) {
    return this.http.get<product>(`http://localhost:3000/product/${id}`);
  }

  
  updateProduct(product: product) {
    return this.http.put<product>(
      `http://localhost:3000/product/${product.id}`,
      product
    );
  }
  // userLogin(data:login){
  // this.http.post(`http://localhost:3000/login`,data,{observe:'response'}).subscribe((res)=>{
  //   console.log(res)
  //   this.route.navigate(['seller-home'])
  // })



// sellerSignUp(data:signUp){
//   this.http.post(`http://localhost:3000/seller`,data,{observe:'response'}).subscribe((res)=>{
//     console.log(res)
//     this.route.navigate(['seller-home'])
//   })
// }
}

  
