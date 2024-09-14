import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { ResponseToken } from '../shared/responseToken.class';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService :AuthService){}

  ngOnInit():void{
    this.response();

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
}
