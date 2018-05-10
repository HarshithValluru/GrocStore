import { Component } from '@angular/core';
import { SignIn } from './signIn';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor() {}
  submitSignIn = false;
  signIn = new SignIn("","");
  
  onSubmit() {
    this.submitSignIn = true;
  }
}
