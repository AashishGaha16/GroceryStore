import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DalleComponent } from './dynamicList/dalle/dalle.component';
import { FrozenComponent } from './dynamicList/frozen/frozen.component';
import { MomoComponent } from './dynamicList/momo/momo.component';
import { RiceComponent } from './dynamicList/rice/rice.component';
import { SignatureComponent } from './dynamicList/signature/signature.component';
import { SignaturesComponent } from './dynamicList/signatures/signatures.component';
import { NonvegComponent } from './dynamicList/snacks/nonveg/nonveg.component';
import { VegComponent } from './dynamicList/snacks/veg/veg.component';
import { BakeryComponent } from './staticList/bakery/bakery.component';
import { BeveragesComponent } from './staticList/beverages/beverages.component';
import { FrozenfoodComponent } from './staticList/frozenfood/frozenfood.component';
import { HouseholdComponent } from './staticList/household/household.component';
import { KitchenComponent } from './staticList/kitchen/kitchen.component';
import { PetfoodComponent } from './staticList/petfood/petfood.component';
import { ProductsComponent } from './staticList/products/products.component';
import { ShortcodesComponent } from './staticList/shortcodes/shortcodes.component';
import { VegetableComponent } from './staticList/vegetable/vegetable.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'households',
    component: HouseholdComponent
  },
  {
    path: 'vegetables',
    component: VegetableComponent
  },
  {
    path: 'kitchen',
    component: KitchenComponent
  },
  {
    path: 'shortcodes',
    component: ShortcodesComponent
  },
  {
    path: 'beverages',
    component: BeveragesComponent
  },
  {
    path: 'petfoods',
    component: PetfoodComponent
  },
  {
    path: 'frozenfoods',
    component: FrozenfoodComponent
  },
  {
    path: 'bread&bakery',
    component: BakeryComponent
  },
  {
    path: 'dalle_momo',
    component: DalleComponent
  },
  {
    path: 'frozen_items',
    component: FrozenComponent
  },
  {
    path: 'momo',
    component: MomoComponent
  },
  {
    path: 'rice_and_noodles',
    component: RiceComponent
  },
  {
    path: 'signature',
    component: SignatureComponent
  },
  {
    path: 'signatures',
    component: SignaturesComponent
  },
  {
    path: 'nonveg',
    component: NonvegComponent
  },
  {
    path: 'veg',
    component: VegComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsidelistRoutingModule { }
