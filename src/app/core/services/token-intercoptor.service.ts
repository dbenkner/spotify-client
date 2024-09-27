import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, Observable, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthService) { }
  
  intercept(request:HttpRequest<any>, next: HttpHandler) :Observable<HttpEvent<any>>{
    const accessToken = localStorage.getItem('access_token');
    const authEndpoint = 'https://accounts.spotify.com/api/token';
    console.log(request);
    console.log(accessToken);
    console.log('token intercepted!');

    if(accessToken && request.url !== authEndpoint) {
      request = this.addToken(request, accessToken);
    }
    console.log('Orginal Reuest: ',request);
    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401 && accessToken){
          return this.handleTokenExpired(request, next);
        }
        return throwError(error);
      })
    );
  }

  private addToken(request: HttpRequest<any>, token:string):HttpRequest<any>{
    console.log('The token is', token);
    const headers = request.headers.set('Authorization', `Bearer ${token}`)
    console.log(`Org header is`, request.headers.keys().map(key => `${key}: ${request.headers.get(key)}`));
    console.log(`The header is`,  headers.keys().map(key => `${key}: ${request.headers.get(key)}`));
    let clonedRequest;
    if (request.method === 'GET'){
      return request.clone({
        headers
      });
    }
     clonedRequest = request.clone({
      headers,
      body: request.body
    });
    console.log('Clonsed Request: ', clonedRequest);
    return clonedRequest;
  }
  private handleTokenExpired(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return this.authService.refreshToken().pipe(
      switchMap(() => {
        const newAccessToken = localStorage.getItem('access_token');
        if(newAccessToken === null) {
          return throwError("error");
        }
        return next.handle(this.addToken(request, newAccessToken));
      }),
      catchError((error) => {
        console.error('Error handling token: ', error);
        return throwError(error);
      })
    )
  }
}
