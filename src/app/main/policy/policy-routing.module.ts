import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqsComponent } from './faqs/faqs.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  {
    path: 'faqs',
    component: FaqsComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyRoutingModule { }
