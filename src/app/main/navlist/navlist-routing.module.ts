import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BestdealsComponent } from './bestdeals/bestdeals.component';
import { EventsComponent } from './events/events.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'bestdeals',
    component: BestdealsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavlistRoutingModule { }
