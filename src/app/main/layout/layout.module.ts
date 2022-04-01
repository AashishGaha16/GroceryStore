import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AsideComponent
  ]
})
export class LayoutModule { }
