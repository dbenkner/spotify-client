import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { PlaylistService } from 'src/app/core/services/playlist.service';
import { UsersPlaylists } from 'src/app/shared/usersPlayLists.class';

@Component({
  selector: 'app-get-all-user-playlists',
  templateUrl: './get-all-user-playlists.component.html',
  styleUrls: ['./get-all-user-playlists.component.css']
})
export class GetAllUserPlaylistsComponent {
  userPlaylists!:UsersPlaylists;
  constructor(private authSvc:AuthService,
    private playlistSvc:PlaylistService
  ){}

  ngOnInit():void{
    this.playlistSvc.getUsersPlaylists().subscribe({
      next:(res) => {
        console.log(res);
        this.userPlaylists = res;
        console.log(this.userPlaylists);
      },
      error:(err) => {
        console.error(err);
      }
    });
  }
}
