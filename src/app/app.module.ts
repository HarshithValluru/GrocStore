import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [ AppComponent, WelcomeComponent ],
  imports: [ BrowserModule.withServerTransition({ appId: 'universal-cli' }), 
            AppRoutingModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
