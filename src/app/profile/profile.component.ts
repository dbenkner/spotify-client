import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private auth: AuthService){}

  ngOnInit(){
    this.auth.getProfile().subscribe({
      next(res) {
        console.log(res);
      },
      error(err){
        console.error(err);
      }
    });
  }
}
