import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavlistRoutingModule } from './navlist-routing.module';
import { EventsComponent } from './events/events.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BestdealsComponent } from './bestdeals/bestdeals.component';
import { ServicesComponent } from './services/services.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    EventsComponent,
    AboutusComponent,
    BestdealsComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    NavlistRoutingModule,
    LayoutModule
  ]
})
export class NavlistModule { }
