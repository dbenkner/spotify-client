import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PlaylistService } from 'src/app/core/services/playlist.service';

@Component({
  selector: 'app-play-list-details',
  templateUrl: './play-list-details.component.html',
  styleUrls: ['./play-list-details.component.css']
})
export class PlayListDetailsComponent {
  
  constructor(private authSvc: AuthService,
    private playlistSvc: PlaylistService,
    private route: ActivatedRoute
  ){}

  ngOnInit():void{
    let id:string = this.route.snapshot.params['id'];
    console.log(id);
    this.playlistSvc.getPlayLists(id).subscribe({
      next:(res) => {
        console.log(res);
      },
      error:(err) => {
        console.error(err);
      }
    });
  }
}
