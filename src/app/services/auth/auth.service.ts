import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, UserCredential } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {}

  // Google Sign-In function
  async googleSignIn(): Promise<UserCredential | null> {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(this.auth, provider);
      console.log('User signed in:', userCredential.user);
      return userCredential;
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      return null;
    }
  }

  // Logout function
  async logout(): Promise<void> {
    await signOut(this.auth);
    console.log('User signed out');
  }
}