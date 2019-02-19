import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AdminFooterComponent,
    AdminNavbarComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AdminFooterComponent,
    AdminNavbarComponent,
  ]
})
export class ComponentsModule { }
