import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import swal from'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string;
  password: string;
  constructor(private route: Router, public authService: AuthService) { }
  isSignedIn = false;
  ngOnInit() {
    if(localStorage.getItem('user') !== null) {
      this.isSignedIn = true
      this.route.navigate(['/home']);
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

  signOut() {
    this.authService.logOut();
    this.isSignedIn = false;
  }

}
