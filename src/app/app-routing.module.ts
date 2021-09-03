import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'frontend', pathMatch: 'full' },
  {
    path: 'passwordreset',
    loadChildren: './passwordreset/passwordreset.module#PasswordresetPageModule'
  },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  {
    path: 'productdetail/:pid',
    loadChildren: './productdetail/productdetail.module#ProductdetailPageModule'
  },
  {
    path: 'productlist',
    loadChildren: './productlist/productlist.module#ProductlistPageModule'
  },
  {
    path: 'Checkout',
    loadChildren: './checkout/checkout.module#CheckoutPageModule'
  },
  {
    path: 'applypromo',
    loadChildren: './applypromo/applypromo.module#ApplypromoPageModule'
  },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  {
    path: 'orderinfo',
    loadChildren: './orderinfo/orderinfo.module#OrderinfoPageModule'
  },
  {
    path: 'frontend',
    loadChildren: () => import('./frontend/frontend.module').then( m => m.FrontendPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

