import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
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
