import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './components/app/app.component';
import { CommonComponent } from './components/common/common.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DomHelperService } from './services/dom/dom.helper.service';

import {
  PanelModule,
  TooltipModule,
  DropdownModule} from 'primeng/primeng';
import { ZkHeaderComponent } from './components/zk-header/zk-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    DashboardComponent,
    ZkHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DomHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
