import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'auth_token';
  private _loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  loggedIn$ = this._loggedIn.asObservable();

  private users = [
    { username: 'admin', password: 'admin', name:"Administrator", token: 'token-admin' },
    { username: 'user1', password: '1234', name:"Jhon",  token: 'token-user1' },
    { username: 'demo', password: 'demo345',name:"demo345",token: 'token-guest' }
  ];



  constructor(private router: Router,  @Inject(PLATFORM_ID) private platformId: Object) {}



  login(username: string, password: string): Observable<boolean> {
    const matchedUser = this.users.find(
      user => user.username === username && user.password === password
    );

    if (matchedUser) {
      if (this.isBrowser()) {
        localStorage.setItem(this.tokenKey, matchedUser.token);
      }
      this._loggedIn.next(true);
      return of(true);
    }

    return of(false);
  }

  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem(this.tokenKey);
    }
    this._loggedIn.next(false);
    this.router.navigateByUrl('/');
  }

  isLoggedIn(): boolean {
    return this.isBrowser() && !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string {
    if (this.isBrowser()) {
      const token = localStorage.getItem(this.tokenKey);
      return token || '';
    }
    return '';
  }

  private hasToken(): boolean {
    return this.isBrowser() && !!localStorage.getItem(this.tokenKey);
  }


  getUserByToken(token: string) {
    return this.users.find(user => user.token === token) || null;
  }


  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }


}
