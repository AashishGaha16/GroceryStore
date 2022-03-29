import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { LayoutModule } from './layout/layout.module';
import { BannerModule } from './banner/banner.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    BannerModule
  ]
})
export class MainModule { }
