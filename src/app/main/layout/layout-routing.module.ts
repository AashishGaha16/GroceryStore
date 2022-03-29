import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'aside',
    component: AsideComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
