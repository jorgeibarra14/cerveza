import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>;

constructor(private fireAuth: AngularFireAuth) {
  this.userData = fireAuth.authState;
  console.log(this.userData);
}

/* Sign up */
SignUp(email: string, password: string) {
  this.fireAuth
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log('Successfully signed up!', res);
    })
    .catch(error => {
      console.log('Something is wrong:', error.message);
    });
}

/* Sign in */
SignIn(email: string, password: string) {
  debugger
  this.fireAuth
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      debugger
      console.log('Successfully signed in!');
    })
    .catch(err => {
      console.log('Something is wrong:',err.message);
    });
}

/* Sign out */
SignOut() {
  this.fireAuth
    .signOut();
}

}
