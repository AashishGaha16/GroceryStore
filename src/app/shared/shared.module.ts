import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FilterPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxScrollTopModule
  ],
  exports: [
    HttpClientModule,
    NgxPaginationModule,
    FilterPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxScrollTopModule,
  ]
})
export class SharedModule { }
