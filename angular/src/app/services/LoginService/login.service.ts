import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { LoginResponse } from '../../interfaces/login-response';
import { tap } from 'rxjs/operators';
import { LoginCredentials } from '../../interfaces/login-credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;

  $loginSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  $loginObservable: Observable<any>;

  constructor(
    private http: HttpClient
  )
  {
    this.$loginObservable = this.$loginSubject.asObservable();
    this.token = localStorage.getItem('easydonate-app_token');
  }

  login(credentials: LoginCredentials)
  {
    
    return this.http.post<LoginResponse>
    (``, {})
    .pipe(
      tap(( response: LoginResponse) => 
      {
        this.token = response.token;
        localStorage.setItem('easydonate-app_token', this.token);
      })
    );
  }
}
