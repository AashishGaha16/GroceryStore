import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
      },
      {
        path: '',
        loadChildren:()=>import('./asidelist/asidelist.module').then(m=>m.AsidelistModule)
      },
      {
        path: '',
        loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
      },
      {
        path: '',
        loadChildren:()=>import('./layout/layout.module').then(m=>m.LayoutModule)
      },
      {
        path: '',
        loadChildren:()=>import('./navlist/navlist.module').then(m=>m.NavlistModule)
      },
      {
        path: '',
        loadChildren:()=>import('./policy/policy.module').then(m=>m.PolicyModule)
      },
      {
        path: '',
        loadChildren:()=>import('./contactus/contactus.module').then(m=>m.ContactusModule)
      },
      {
        path: '',
        loadChildren:()=>import('./payment/payment.module').then(m=>m.PaymentModule)
      },
      {
        path: '',
        loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)
      },
      {
        path: '',
        loadChildren:()=>import('./banner/banner.module').then(m=>m.BannerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
