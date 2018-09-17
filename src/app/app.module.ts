import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BigDataService } from './Services/big-data.service';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { EventsService } from './Services/events.service';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UsersComponent } from './users/users.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ChartcardComponent } from './chartcard/chartcard.component';
import { TaskComponent } from './task/task.component';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { EmployeeService } from './Services/employee.service';
import { IconboxComponent } from './icons/iconbox/iconbox.component';
import { IconsService } from './Services/icons.service';
import { StyleBoxComponent } from './notifications/style-box/style-box.component';
import { AlertBoxComponent } from './notifications/alert-box/alert-box.component';
import { StatesBoxComponent } from './notifications/states-box/states-box.component';
import { PlacesBoxComponent } from './notifications/places-box/places-box.component';
import { NotificationsService } from './Services/notifications.service';

const appRoutes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'user profile', component: UsersComponent},
  {path: 'table list', component: TableListComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'upgrade', component: UpgradeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    HeaderComponent,
    NavComponent,
    SideNavComponent,
    MainSectionComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UsersComponent,
    TableListComponent,
    TypographyComponent,
    UpgradeComponent,
    ChartcardComponent,
    TaskComponent,
    EmployeeStatusComponent,
    IconboxComponent,
    StyleBoxComponent,
    AlertBoxComponent,
    StatesBoxComponent,
    PlacesBoxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BigDataService, EventsService, EmployeeService, IconsService, NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
