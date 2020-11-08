import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';

import Swal from 'sweetalert2';
import swal from "sweetalert2";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>;
  isLoggedIn = false;
  constructor(public fireAuth: AngularFireAuth) {
    this.userData = fireAuth.authState;
    console.log(this.userData);
  }
  async signIn(email: string, password: string) {
    await this.fireAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      }).catch(error => {
        Swal.fire('Error al iniciar sesión', 'Por favor, revise sus credenciales', 'error')
      })
  }

  async signUp(email: string, password: string) {
    await this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }

  /* Sign out */
  logOut() {
    this.fireAuth.signOut();
    localStorage.removeItem('user');
  }

}
