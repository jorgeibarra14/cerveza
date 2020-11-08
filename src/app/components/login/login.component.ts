import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private route: Router, public authService: AuthService) { }
  isSignedIn = false;
  ngOnInit() {
    if(localStorage.getItem('user') !== null) {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }

  async login(email:string, password: string) {

    await this.authService.signIn(email, password);
    if(this.authService.isLoggedIn) {
      this.isSignedIn = true;
    }
    // this.route.navigate(['/home']);
  }

}
