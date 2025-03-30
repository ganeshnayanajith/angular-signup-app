import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;

  constructor() { }

  // Simulate user registration
  register(userData: SignupData): Observable<User> {
    // In a real app, this would make an HTTP POST request to your API
    console.log('Registering user:', userData);
    
    // Simulate network delay
    return of({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email
    }).pipe(delay(800));
  }

  // Simulate checking if email is already taken
  isEmailTaken(email: string): Observable<boolean> {
    // In a real app, this would make an HTTP request to check if email exists
    const isTaken = email.toLowerCase() === 'test@example.com';
    
    return of(isTaken).pipe(delay(500));
  }

  // Get current authenticated user
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
