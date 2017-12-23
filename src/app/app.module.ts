import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './components/app/app.component';
import { CommonComponent } from './components/common/common.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DomHelperService } from './services/dom/dom.helper.service';

import {ButtonModule } from 'primeng/primeng';
import { ZkHeaderComponent } from './components/zk-header/zk-header.component';
import { ZkLoaderComponent } from './components/zk-loader/zk-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    DashboardComponent,
    ZkHeaderComponent,
    ZkLoaderComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [DomHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
