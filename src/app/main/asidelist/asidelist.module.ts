import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsidelistRoutingModule } from './asidelist-routing.module';
import { ProductsComponent } from './staticList/products/products.component';
import { HouseholdComponent } from './staticList/household/household.component';
import { VegetableComponent } from './staticList/vegetable/vegetable.component';
import { KitchenComponent } from './staticList/kitchen/kitchen.component';
import { ShortcodesComponent } from './staticList/shortcodes/shortcodes.component';
import { BeveragesComponent } from './staticList/beverages/beverages.component';
import { PetfoodComponent } from './staticList/petfood/petfood.component';
import { FrozenfoodComponent } from './staticList/frozenfood/frozenfood.component';
import { BakeryComponent } from './staticList/bakery/bakery.component';
import { LayoutModule } from '../layout/layout.module';
import { SignaturesComponent } from './dynamicList/signatures/signatures.component';
import { DalleComponent } from './dynamicList/dalle/dalle.component';
import { RiceComponent } from './dynamicList/rice/rice.component';
import { FrozenComponent } from './dynamicList/frozen/frozen.component';
import { MomoComponent } from './dynamicList/momo/momo.component';
import { SignatureComponent } from './dynamicList/signature/signature.component';
import { NonvegComponent } from './dynamicList/snacks/nonveg/nonveg.component';
import { VegComponent } from './dynamicList/snacks/veg/veg.component';


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
    BakeryComponent,
    SignaturesComponent,
    DalleComponent,
    RiceComponent,
    FrozenComponent,
    MomoComponent,
    SignatureComponent,
    NonvegComponent,
    VegComponent
  ],
  imports: [
    CommonModule,
    AsidelistRoutingModule,
    LayoutModule
  ]
})
export class AsidelistModule { }
