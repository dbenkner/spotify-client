import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http:HttpClient) { }

  getUsersPlaylists():Observable<any>{
    const accessToken = localStorage.getItem('access_token');
      const headerDict = {
      Authorization: 'Bearer ' + accessToken,
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    let userId = window.localStorage.getItem('userId');
    return this.http.get(`https://api.spotify.com/v1/users/${userId}/playlists`, requestOptions) as Observable<any>
  }
}
