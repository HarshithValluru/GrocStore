import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [ AppComponent, WelcomeComponent ],
  imports: [ BrowserModule.withServerTransition({ appId: 'universal-cli' }), 
            AppRoutingModule ],
  providers: [],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
