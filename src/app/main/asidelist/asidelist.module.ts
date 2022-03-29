import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsidelistRoutingModule } from './asidelist-routing.module';
import { ProductsComponent } from './products/products.component';
import { HouseholdComponent } from './household/household.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ShortcodesComponent } from './shortcodes/shortcodes.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { PetfoodComponent } from './petfood/petfood.component';
import { FrozenfoodComponent } from './frozenfood/frozenfood.component';
import { BakeryComponent } from './bakery/bakery.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    ProductsComponent,
    HouseholdComponent,
    VegetableComponent,
    KitchenComponent,
    ShortcodesComponent,
    BeveragesComponent,
    PetfoodComponent,
    FrozenfoodComponent,
    BakeryComponent
  ],
  imports: [
    CommonModule,
    AsidelistRoutingModule,
    LayoutModule
  ]
})
export class AsidelistModule { }
