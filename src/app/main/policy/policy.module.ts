import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { FaqsComponent } from './faqs/faqs.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    FaqsComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    PolicyRoutingModule
  ]
})
export class PolicyModule { }
