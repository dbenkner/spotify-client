import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersPlaylists } from 'src/app/shared/usersPlayLists.class';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http:HttpClient) { }

  getUsersPlaylists():Observable<UsersPlaylists>{
    const accessToken = localStorage.getItem('access_token');
      const headerDict = {
      Authorization: 'Bearer ' + accessToken,
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    let userId = window.localStorage.getItem('userId');
    return this.http.get(`https://api.spotify.com/v1/users/${userId}/playlists`, requestOptions) as Observable<UsersPlaylists>
  }
  getPlayLists(playlistId:string):Observable<any>{
        const accessToken = localStorage.getItem('access_token');
      const headerDict = {
      Authorization: 'Bearer ' + accessToken,
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get(`https://api.spotify.com/v1/playlists/${playlistId}`, requestOptions) as Observable<any>;
  }
  getPlaylistCover(playlistId:string):Observable<any>{
    let requestOptions = this.setHeaders();
    console.log("test");
    return this.http.get(`https://api.spotify.com/v1/playlists/${playlistId}/images`, requestOptions) as Observable<any>;
  }
  private setHeaders():any{
      const accessToken = localStorage.getItem('access_token');
      const headerDict = {
      Authorization: 'Bearer ' + accessToken,
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return requestOptions;
  }
}
