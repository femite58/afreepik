import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user = new BehaviorSubject<any>(null);
  private baseUrl;
  authModal = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private config: ConfigService,
  ) {
    this.baseUrl = config.baseUrl;
  }

  get user() {
    return this._user.asObservable();
  }

  login(data) {
    // return this.http.post<any>(
    //   `${this.baseUrl}/login`, data
    // )
    return of({ status: 'success', data: { username: 'surdayo', photo: 'assets/images/userHeaderIco.png', email: 'sodikdayo@ymail.com'} }).pipe(tap(auth => {
      if (auth.status == 'success') {
        this.saveAuth(auth.data);
      }
    }));
  }

  logout() {
    localStorage.removeItem('userData');
    this._user.next(null);
  }

  saveAuth(auth) {
    localStorage.setItem('userData', JSON.stringify(auth));
    this._user.next(auth);
  }

  autoLogin() {
    let storedAuth = localStorage.getItem('userData');
    console.log(storedAuth);
    if (storedAuth) {
      this._user.next(JSON.parse(storedAuth));
    }
  }


}

