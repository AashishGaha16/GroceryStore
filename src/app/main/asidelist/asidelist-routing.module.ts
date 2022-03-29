import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakeryComponent } from './bakery/bakery.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { FrozenfoodComponent } from './frozenfood/frozenfood.component';
import { HouseholdComponent } from './household/household.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { PetfoodComponent } from './petfood/petfood.component';
import { ProductsComponent } from './products/products.component';
import { ShortcodesComponent } from './shortcodes/shortcodes.component';
import { VegetableComponent } from './vegetable/vegetable.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsidelistRoutingModule { }
