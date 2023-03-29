import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  saveProduct(body:product){
    return this.http.post(``,body)
  }
  getAllProduct(){
    return this.http.get(``)
  }
  updateAllProduct(id:number,body:any){
    return this.http.put(``,body)
  }
}
