import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { PlaylistService } from 'src/app/core/services/playlist.service';

@Component({
  selector: 'app-get-all-user-playlists',
  templateUrl: './get-all-user-playlists.component.html',
  styleUrls: ['./get-all-user-playlists.component.css']
})
export class GetAllUserPlaylistsComponent {


  constructor(private authSvc:AuthService,
    private playlistSvc:PlaylistService
  ){}

  ngOnInit():void{
    this.playlistSvc.getUsersPlaylists().subscribe({
      next:(res) => {
        console.log(res);
      },
      error:(err) => {
        console.error(err);
      }
    });
  }
}
