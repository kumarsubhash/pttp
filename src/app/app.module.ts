import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SharedComponent } from './layouts/shared/shared.component';

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
//     path: '',
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

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'},
  {path: 'account', loadChildren: './layouts/shared/shared.module#SharedModule'},
]

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
     AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    SharedComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
