import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailusComponent } from './mailus/mailus.component';

const routes: Routes = [
  {
    path: 'contactus',
    component: MailusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactusRoutingModule { }
