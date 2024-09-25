import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { GetAllUserPlaylistsComponent } from './playlists/get-all-user-playlists/get-all-user-playlists.component';
import { PlayListDetailsComponent } from './playlists/play-list-details/play-list-details.component';
import { TruncatePipe } from './shared/truncate.pipe';


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
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
    provideOAuthClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
