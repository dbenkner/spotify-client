import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaybackState } from 'src/app/shared/playbackState.class';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }


  getPlaybackState():Observable<PlaybackState>{
    const accessToken = localStorage.getItem('access_token');
    const headerDict = {
    Authorization: 'Bearer ' + accessToken,
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    console.log(requestOptions)
    return this.http.get('https://api.spotify.com/v1/me/player', requestOptions) as Observable<PlaybackState>
  }
  getAvailableDevices():Observable<any>{
    const accessToken = localStorage.getItem('access_token');
    const scope:string = localStorage.getItem('scope') || '';
    console.log(scope);
    let headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + accessToken)
    return this.http.get('https://api.spotify.com/v1/me/player/devices', {headers}) as Observable<any>;
  }
  startPlayback(uri:string, device_id:string):Observable<any>{
    const accessToken = localStorage.getItem('access_token');
    const headerDict = {
      Authorization: 'Bearer ' + accessToken,
      };
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    }
    console.log(uri);
    let body = {"context_uri": uri};
    return this.http.put(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,body, requestOptions) as Observable<any>;
  }
  pausePlayback(device_id:string):Observable<any>{
    const accessToken = localStorage.getItem('access_token');
    const headerDict = {
      Authorization: 'Bearer ' + accessToken,
      };
      const requestOptions = {
        headers: new HttpHeaders(headerDict)
      };
    return this.http.put(`https://api.spotify.com/v1/me/player/pause?device_id=${device_id}`, requestOptions) as Observable<any>;
   }
}
