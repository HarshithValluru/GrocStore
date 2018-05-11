import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ReceiptStoreComponent } from './receipt-store/receipt-store.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: 'receipt-store', component: ReceiptStoreComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }