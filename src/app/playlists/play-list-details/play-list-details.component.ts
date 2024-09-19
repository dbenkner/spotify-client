import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PlaylistService } from 'src/app/core/services/playlist.service';
import { Playlist } from 'src/app/shared/playlist.class';
import { Track } from 'src/app/shared/Track.class';
import { Tracks } from 'src/app/shared/tracks.class';

@Component({
  selector: 'app-play-list-details',
  templateUrl: './play-list-details.component.html',
  styleUrls: ['./play-list-details.component.css']
})
export class PlayListDetailsComponent {
  

  playlist!:Playlist;
  constructor(private authSvc: AuthService,
    private playlistSvc: PlaylistService,
    private route: ActivatedRoute
  ){}

  ngOnInit():void{
    let id:string = this.route.snapshot.params['id'];
    console.log(id);
    this.playlistSvc.getPlayLists(id).subscribe({
      next:(res) => {

        this.playlist = res;
        console.log(this.playlist);
        console.log(this.playlist.type);
        console.log(this.playlist.tracks.items);
      },
      error:(err) => {
        console.error(err);
      }
    });

  }
  isTrack(item:any):item is Track{
    console.log(item);
    return true;
  }
}
