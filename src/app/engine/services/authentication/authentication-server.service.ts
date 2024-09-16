import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse} from '@angular/common/http';
import { Observable, tap} from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/engine/models/user';
import { IUser } from 'src/app/engine/models/contracts/i-user-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationServer {

  apiURL: string = environment.apiURLBase
  // apiURL: string = environment.apiURLBase + "/api/usuarios"
  tokenURL: string = environment.apiURLBase + environment.obterTokenUrl
  clientID: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();
  setUserAttributes:User = new User();

  constructor(private http: HttpClient, private route:Router) { }

  register(user: User): Observable<User> {
    return this.http
    .post<User>(`${this.apiURL}/register`, user);
  }

  login(credentials: {email: string, password: string}): Observable<any> {
    return this.http
      .post<any>(`${this.apiURL}/login`, credentials, {observe:'response'})
  }

  user(email:any): Observable<any>{
    return this.http
    .post<any>(`${this.apiURL}/user/${email}`,{observe:'response'});
  }

  getToken(){
    const tokenString = localStorage.getItem('access_token');
    if(tokenString){
      this.setUserAttributes.token = JSON.stringify(tokenString);
      // const token = JSON.parse(tokenString).access_token;
      return this.setUserAttributes.token;
    }
    return null;
  }

  endSession(){
    localStorage.removeItem('access_token');
  }

  getUserAuthenticated(){
    const token = this.getToken();
    if(token){
      this.setUserAttributes.tokenDecode = this.jwtHelper.decodeToken(token);
      return this.setUserAttributes.tokenDecode;
    }
    return null;
  }

  isAuthenticated() : boolean {
    const token = this.getToken();
    if(token){
      this.setUserAttributes.tokenExpired = this.jwtHelper.isTokenExpired(token);
      return !this.setUserAttributes.tokenExpired;
    }
    return false;
  }

  getUser(){
    const token:any = this.getToken();
    let decodeToken = this.jwtHelper.decodeToken(token);
    let arrayDecode:any = [];

    JSON.stringify(decodeToken);

    arrayDecode = decodeToken;
    this.setUserAttributes.email = arrayDecode.sub;

    this.user(this.setUserAttributes.email).subscribe((response:IUser) => {
      this.setUserAttributes.id = response.id;
      this.setUserAttributes.name = response.name;
      this.setUserAttributes.cpf = response.cpf;
      this.setUserAttributes.userType = response.userType;
      this.setUserAttributes.userTypeDescription = response.userTypeDescription;
    });
    return this.setUserAttributes;
  }

}
