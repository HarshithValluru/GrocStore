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
  
  signIn = new SignIn();
  signUp = new SignUp("Julio","Jones","Julio.Jones@Falcons.com",5107179503,30542,"Falcons","Falcons");
  validCredentials: boolean = true;
  jQuery: any;
  constructor(private _router:Router) {}

  onSignIn() {
    var email = this.signIn.email;
    var pwd = this.signIn.password;
    if(email=="Julio.Jones@Falcons.com" && pwd=="Falcons"){
      this._router.navigate(['/home-page']);
      location.reload();
    }
    else
      this.validCredentials = false;
  }
  onSignUp() {
    //$("#myModal").modal("hide");
    location.reload();
    this._router.navigate(['/home-page']);
  }
}
