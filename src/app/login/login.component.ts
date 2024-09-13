import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { ResponseToken } from 'src/app/shared/responseToken.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  constructor(private authService:AuthService,
    private router:Router
  ){}

  async logIn():Promise<void>{
    await this.redirectToSpotifyAuth();
  }
  async redirectToSpotifyAuth():Promise<void>{
    const codeVerifier:string = this.generateRandomString(64);
    const hashed:ArrayBuffer = await  this.sha256(codeVerifier);
    const codeChallenge = this.base64encode(hashed);
    const scope = 'user-read-private user-read-email';
    const authUrl:URL = new URL("https://accounts.spotify.com/authorize");

    window.localStorage.setItem('code_verifier', codeVerifier);
    const params = {
      response_type : 'code',
      client_id: this.authService.secKey,
      scope,
      code_challenge: codeChallenge,
      code_challenge_method: 'S256',
      redirect_uri: this.authService.redirectUri
    }

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
  }

  private generateRandomString(length:number):string {
    const possible:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values:Uint8Array = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  }
  private async sha256(plain:string):Promise<ArrayBuffer>{
    const encoder:TextEncoder = new TextEncoder();
    const data:Uint8Array = encoder.encode(plain);
    return window.crypto.subtle.digest('SHA-256', data) as Promise<ArrayBuffer>;
  }
  private base64encode(input:any):string {
    return btoa(String.fromCharCode(...new Uint8Array(input))).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  }
}
