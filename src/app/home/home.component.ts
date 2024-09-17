import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { ResponseToken } from '../shared/responseToken.class';
import { UserService } from '../core/services/user.service';
import { UserProfile } from '../shared/user.class';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userProfile?:UserProfile;
  constructor(private authService :AuthService, private userService:UserService){}

  ngOnInit():void{
    this.response();
    this.loadProfile();
  }
  response():void{
    const urlParams= new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    console.log(code);
    this.authService.getToken(code).subscribe({
      next(res) {
        console.log(res);
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
      },
      error(err) {
        console.error(err);
      },
    });
  }
  loadProfile():void{
    this.userService.getProfile().subscribe({
      next:(res) => {
        this.userProfile = res;
        if(this.userProfile.type != undefined){
          localStorage.setItem('userId', this.userProfile.id!);
        }
      },
      error:(err) => {
        console.error(err);
      }
    });
  }
}
