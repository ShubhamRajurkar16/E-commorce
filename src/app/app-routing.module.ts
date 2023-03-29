import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerGuard } from './auth/seller.guard';
import { HomeComponent } from './home/home.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
  },
  {
    path:'seller-login',component:SellerLoginComponent,
  },
  {
    path:'seller-home',component:SellerHomeComponent,canActivate:[SellerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
