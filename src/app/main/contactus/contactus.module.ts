import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { MailusComponent } from './mailus/mailus.component';


@NgModule({
  declarations: [
    MailusComponent
  ],
  imports: [
    CommonModule,
    ContactusRoutingModule
  ]
})
export class ContactusModule { }
