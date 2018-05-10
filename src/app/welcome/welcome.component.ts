import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SignIn } from './signIn';
import { SignUp } from './signUp';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private _router:Router) {}
  signIn = new SignIn();
  signUp = new SignUp("Julio","Jones","Julio.Jones@Falcons.com",5107179503,30542,"Falcons","Falcons");
  validCredentials = true;

  onSignIn() {
    var email = this.signIn.email;
    var pwd = this.signIn.password;
    if(email=="Julio.Jones@Falcons.com" && pwd=="Falcons")
      this._router.navigate(['/home-page']);
    else
      this.validCredentials = false;
  }
  onSignUp() {
    this._router.navigate(['/home-page']);
  }
}
