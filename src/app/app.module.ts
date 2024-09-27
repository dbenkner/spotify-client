import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { GetAllUserPlaylistsComponent } from './playlists/get-all-user-playlists/get-all-user-playlists.component';
import { PlayListDetailsComponent } from './playlists/play-list-details/play-list-details.component';
import { TruncatePipe } from './shared/truncate.pipe';
import { AuthService } from './core/services/auth.service';
import { TokenInterceptorService } from './core/services/token-intercoptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    GetAllUserPlaylistsComponent,
    PlayListDetailsComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideOAuthClient(),
  
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
