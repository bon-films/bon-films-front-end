import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { FirebaseUser } from '../../models/firebase-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: firebase.User;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      //save userData in localStorage if logged in
      //else save 'null' in localStorage if logged out
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  async SignIn(email, password) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.ngZone.run(() => {
        //this.SetUserData(result.user);
        this.reloadComponent("/home");
      });
    } catch (error) {
      window.alert(error.message);
    }
  }

  async SignUp(email, password) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.SendVerificationMail();
      //this.SetUserData(result.user);
    } catch (error) {
      window.alert(error.message);
    }
  }

  async SendVerificationMail() {
    return (await this.afAuth.currentUser).sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email']);
      })
  }

  async ForgotPassword(passwordResetEmail) {
    try {
      await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
      window.alert('Password reset email sent, please check your inbox.');
      this.router.navigate(['login']);
    } catch (error) {
      window.alert(error);
    }
  }

  //sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  async AuthLogin(provider) {
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      this.ngZone.run(() => {
        this.router.navigate(['home']);
      });
      //this.SetUserData(result.user);
    } catch (error) {
      window.alert(error);
    }
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  async getToken() {
    return (await this.afAuth.currentUser).getIdToken().then(
      (token) => token.toString()
    );
  }

  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['home']);
  }

  //save userData as an object in AngularFireStore
  // SetUserData(user) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  //   const userData: FirebaseUser = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     emailVerified: user.emailVerified
  //   }
  //   return userRef.set(userData, {
  //     merge: true
  //   })
  // }

  reloadComponent(newUrl: string) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl(newUrl);
  }
}
