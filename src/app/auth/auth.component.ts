import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;
  error="";

  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }
  onSignIn(form: NgForm) {
    this.authService.signIn(form);

    if(this.authService.isAuth==true) {
      this.router.navigate(['appareils']);
      console.log('Sign in successful!');
      this.authStatus = this.authService.isAuth;

    }
    else{
      console.log('Sign in not successful!');
      this.error="Sign in not successful!";
    }

  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
