// Import necessary Angular and Firebase modules.
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

// The Injectable decorator marks it as a service that can be injected.
@Injectable({
  providedIn: 'root' // Service provided at the root level.
})
export class AuthService {

  private currentUserSubject = new BehaviorSubject<firebase.User | null>(null);
  public currentUser = this.currentUserSubject.asObservable();

  constructor(public ngFireAuth: AngularFireAuth) {
    this.ngFireAuth.authState.subscribe(user => {
      this.currentUserSubject.next(user);
    });
  }

  async registerUser(email: string, password: string, fullName: string): Promise<firebase.auth.UserCredential> {
    const credential = await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
    const user = credential.user;
    if (user) {
      // Update user profile with display name
      await user.updateProfile({ displayName: fullName });
      this.currentUserSubject.next(user);
    }
    return credential;
  }
  

  // Method to log in a user with email and password.
  async loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  // Method to sign out the currently logged in user.
  async signOut(): Promise<void> {
    return await this.ngFireAuth.signOut();
  }

  // Method to get the current logged-in user's profile.
  async getProfile(): Promise<firebase.User | null> {
    return await this.ngFireAuth.currentUser;
  }
}
