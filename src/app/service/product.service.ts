import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(body:product){
    return this.http.post(`http://localhost:3000/product`,body)
  }

  getProduct(){
    return this.http.get<product>(`http://localhost:3000/product`)
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/product/${id}`);
  }

  updateAllProduct(id:number,body:any){
    return this.http.put(`http://localhost:3000/product/${id}`,body)
  }
}
