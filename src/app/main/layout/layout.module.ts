import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';

import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';


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
    HttpClientModule,
    FilterPipeModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AsideComponent
  ]
})
export class LayoutModule { }
