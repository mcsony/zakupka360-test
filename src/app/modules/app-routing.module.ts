import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CommonComponent } from '../components/common/common.component';

const routes: Routes = [
  { path: '',  redirectTo: '/' , pathMatch: 'full'},
  { path: '',  component: DashboardComponent, data: {name: 'Главная страница', url: 'app'}},
  { path: 'search:query',  component: CommonComponent, data: {name: 'Поиск', url: 'search'}}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
