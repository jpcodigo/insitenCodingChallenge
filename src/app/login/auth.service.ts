import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatus: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private readonly router: Router,
  ) {}

  logIn(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      this.authStatus = true;
      this.router.navigateByUrl('/companies');
    })
    .catch(err => {
      alert('Sorry, please try again.');
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
      this.authStatus = false;
    });
  }

  getAuthStatus() {
    return this.authStatus;
  }
}
