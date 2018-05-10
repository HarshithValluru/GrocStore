import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [ AppComponent, WelcomeComponent, HomePageComponent, DashboardComponent, PreferencesComponent, ShoppingListComponent ],
  imports: [ BrowserModule.withServerTransition({ appId: 'universal-cli' }), 
            AppRoutingModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
