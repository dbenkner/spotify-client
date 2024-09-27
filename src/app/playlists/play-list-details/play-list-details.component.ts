import { Component, NgZone, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PlayerService } from 'src/app/core/services/player.service';
import { PlaylistService } from 'src/app/core/services/playlist.service';
import { PlaybackState } from 'src/app/shared/playbackState.class';
import { Playlist } from 'src/app/shared/playlist.class';
import { Track } from 'src/app/shared/Track.class';
import { Tracks } from 'src/app/shared/tracks.class';


declare var Spotify:any;
@Component({
  selector: 'app-play-list-details',
  templateUrl: './play-list-details.component.html',
  styleUrls: ['./play-list-details.component.css']
})



export class PlayListDetailsComponent {
  

  playlist!:Playlist;
  playbackState!:PlaybackState;
  deviceId:string|any|null = null;
  player:any|null = null;
  token:string = "";
  playlistCoverUrl:string = "";
  currentSong:string = "";
  currentArists:any[] = [];
  state:string="";
  playPause:string = "Play";
  constructor(private authSvc: AuthService,
    private playlistSvc: PlaylistService,
    private route: ActivatedRoute,
    private playerSvc: PlayerService,
    private renderer: Renderer2,
    private ngZone: NgZone
  ){}

  ngOnInit():void{
    let id:string = this.route.snapshot.params['id'];
    this.loadScript();
    this.refreshToken();
    this.playlistSvc.getPlayLists(id).subscribe({
      next:(res) => {
        this.playlist = res;
      },
      error:(err) => {
        console.error(err);
      }
    });
    (window as any).onSpotifyWebPlaybackSDKReady = () => {
      console.log('Spotify SDK is rteady');
      this.intalizePlayer();
    }
    this.playerSvc.getAvailableDevices().subscribe({
      next:(res) => {
      },
      error:(err) => {
        console.error(err);
      }
    });
    console.log("test")
    this.playlistSvc.getPlaylistCover(id).subscribe({
      next:(res) => {
        this.playlistCoverUrl = res[1].url;
        console.log("loaded playlist cover");
      },
      error:(err) => {
        console.error("unable to load playlist cover", err);
      }
    });
  }
  isTrack(item:any):item is Track{
    return true;
  }
  playPauseBtn():void{
    if(this.playPause === "Play") {
      this.play();
    }
    else{
      this.pause();
    }
  }
  play():void{
    this.refreshToken();
    this.player.togglePlay().then(() => 
    console.log("Toggled Playback!"));
    if(this.state === "paused"){
    }
    else{
      this.playerSvc.startPlayback(this.playlist.uri, this.deviceId.device_id).subscribe({
        next:(res) => {
          console.log(res);

        },
        error:(err) => {
          console.error(err);
        }
      });
    }
    this.playPause = "Pause";
  }
  pause():void{
    this.player.pause();
    console.log("Paused!");
    this.state="paused";
    this.playPause = "Play"
  }
  loadScript():void{
    const script = this.renderer.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    this.renderer.appendChild(document.head, script);
    console.log("Script loaded", script);
  }
  intalizePlayer():void{
    try {
      this.player = new Spotify.Player({
        name: 'Web Playback Player',
        getOAuthToken: (cb: (token: string) => void) => cb(this.token),
        volume: 0.5
      })
    } catch (error) {
      console.error("Failed to create player ", error)
      
    }
    
    if(this.player != null){
      console.log("Player loaded",this.player);
    };
    this.player.addListener('ready', (device_id: string) => {
      console.log('Ready with device ID', device_id)
      this.deviceId = device_id;
    });
    this.player.addListener('not_ready', (device_id:string) => {
      console.log('Device ID has gone offline', device_id)
    })
    this.player.addListener('player_state_changed', () => {
      console.log("State has changed");
      this.ngZone.run(() => {
        this.getState();
      })
    });
    this.player.connect();
  }
  next():void{
    this.player.nextTrack().then(() => {
      console.log('next track');
    });
  }
  previous():void{
    this.player.previousTrack().then(() => {
      console.log('previous track');
    });
  }
  getState():void{
    this.player.getCurrentState().then((state: any) => {
      if(!state) {
        console.error("User is not playing music through thwe web playbackSDK");
        return;
      }
      var current_track = state.track_window.current_track;
      this.currentSong = current_track.name;
      this.currentArists = current_track.artists;
    });
  }
  refreshToken():void{
    this.authSvc.refreshToken().subscribe({
      next:(res) => {
        console.log(res);
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
        localStorage.setItem('scope', res.scope);

        this.token = res.access_token;
        console.log("Token Refreshed");
      },
      error:(err) => {
        console.error(err);
      }
    });
  }
}
