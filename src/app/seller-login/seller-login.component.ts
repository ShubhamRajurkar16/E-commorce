import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from '../service/seller.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {
  
showLogin = false;

formData:FormGroup = new FormGroup({
  'name': new FormControl(''),
  'email': new FormControl(''),
  'pwd': new FormControl('')
})


constructor(private seller:SellerService, private route:Router) {}


// loginSeller() {
//   this.seller.userLogin(this.login.value)
// }

openLogin(){
  this.showLogin=true
}
openSignUp(){
  this.showLogin=false
}


sellerLogin(){
  this.seller.sellerlog(this.formData.value).subscribe((res)=>{console.log(res)
  this.route.navigate(['seller-home'])})
}

sellerSign(){
  this.seller.sellerSign(this.formData.value).subscribe((res)=>{console.log(res)
  this.route.navigate(['seller-home'])})
}


}
