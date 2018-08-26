import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BigDataService } from './Services/big-data.service';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { EventsService } from './Services/events.service';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    HeaderComponent,
    NavComponent,
    SideNavComponent,
    MainSectionComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [BigDataService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
