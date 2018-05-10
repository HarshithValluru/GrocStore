import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }