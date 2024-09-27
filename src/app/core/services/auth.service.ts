import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable, Type } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
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
  user?:UserProfile;
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
  refreshToken():Observable<any>{
    let refreshToken:string|null = localStorage.getItem('refresh_token');
    if(refreshToken === null){
      return new Observable<any>
    }
    const url = "https://accounts.spotify.com/api/token";
    const headerDict = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    const scope = localStorage.getItem('scope');
    console.log(scope);
    let body = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: this.secKey,
      scope: scope || ''
    });
    return this.http.post<any>(url, body, requestOptions).pipe(
      tap((response) => {
        console.log('token refreshed');
        localStorage.setItem('access_token', response.access_token);
      }),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

}
