import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SharedComponent } from './layouts/shared/shared.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'},
  {path: 'account', loadChildren: './layouts/shared/shared.module#SharedModule'},
]
// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'dashboard',
//     pathMatch: 'full',
//   }, {
//     path: '',
//     component: AdminLayoutComponent,
//     children: [
//         {
//       path: '',
//       loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
//   }]}
//   , {
//     path: 'account',
//     component: SharedComponent,
//     children: [
//         {
//       path: '',
//       loadChildren: './layouts/shared/shared.module#SharedModule'
//   }]}
//     // { path: 'dashboard',      component: DashboardComponent },
//     // { path: 'user-profile',   component: UserProfileComponent },
//     // { path: 'table-list',     component: TableListComponent },
//     // { path: 'typography',     component: TypographyComponent },
//     // { path: 'icons',          component: IconsComponent },
//     // { path: 'maps',           component: MapsComponent },
//     // { path: 'notifications',  component: NotificationsComponent },
//     // { path: 'upgrade',        component: UpgradeComponent },
//     // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
// ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
