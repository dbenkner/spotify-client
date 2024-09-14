import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { UserProfile } from '../shared/user.class';
import { Observable } from 'rxjs';
import { Image } from '../shared/image.class';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private auth: AuthService,
    private userSvc:UserService
  ){}
  userProfile!:UserProfile|any;
  profileImage:Image = new Image("url", 200, 200);
  ngOnInit(){
    console.log(localStorage.getItem('access_token'));
    this.auth.refreshToken().subscribe({
      next:(res) => {
        console.log(res);
        localStorage.setItem('accesss_token', res.access_token);
        if (res.refresh_token) {
          localStorage.setItem('refresh_token', res.refresh_token);
        };
      },
      error:(err) => {
        console.error(err);
      }
    })
    this.userSvc.getProfile().subscribe({
      next:(res) => {
        console.log(res);
        this.userProfile = res;
        if(this.userProfile.images[0]){
          this.profileImage.height! = 200;
          this.profileImage.width! = 200;
          this.profileImage.url! = this.userProfile.image.url;
          console.log(this.userProfile);
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
