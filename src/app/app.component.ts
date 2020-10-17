import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore, private route: Router, private authService: AuthService, private afAuth: AngularFireAuth) {
    this.items = firestore.collection('productos').valueChanges();
  }
  title = 'cerro-viejo-crud';
  logged = false;

  // login() {
  //   this.route.navigate(['/home']);
  //   this.logged = true;
  // }

  ngOnInit(): void {
    // this.authService.SignIn("asd@asd.com", "123");

  }

  login() {
    this.route.navigate(['/home']);
    this.logged = true;
  }
  printUser(data: any) {

  }
  printError() {

  }
}
