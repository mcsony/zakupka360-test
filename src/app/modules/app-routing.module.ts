import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../components/app/app.component';
import { CommonComponent } from '../components/common/common.component';

const routes: Routes = [
  // { path: '',  redirectTo: '/' , pathMatch: 'full'},
  { path: '',  component: AppComponent, data: {name: 'Формирование Отчетов', url: 'app'}},
  { path: 'search',  component: CommonComponent, data: {name: 'Формиро', url: 'search'}}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
