import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseToken } from 'src/app/shared/responseToken.class';
import { UserProfile } from 'src/app/shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  secKey: string = "d84501ee2e79430cab2884ee2a8c7aa6";
  redirectUri: string = 'http://localhost:4200/home';
  authUrl:string = "https://accounts.spotify.com/authorize";
  endpiont: string = "https://accounts.spotify.com/api/token";

  constructor(private http : HttpClient) { }

  getToken(code:any):Observable<ResponseToken>{
    let codeVerifier:string|null = localStorage.getItem('code_verifier');
    if(codeVerifier === null) {
      return new Observable<ResponseToken>;
    }
    const headerDict = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    }
    console.log(codeVerifier);
    let body = new URLSearchParams({
      client_id: this.secKey,
      grant_type: 'authorization_code',
      code,
      redirect_uri: this.redirectUri,
      code_verifier: codeVerifier,
    });
    return this.http.post(this.endpiont, body, requestOptions) as Observable<ResponseToken>

  }
  getProfile():Observable<UserProfile>{
    
    const accessToken = localStorage.getItem('access_token');
    const headerDict = {
      Authorization: 'Bearer ' + accessToken,
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get('https://api.spotify.com/v1/me', requestOptions) as Observable<UserProfile>;
  }

}
