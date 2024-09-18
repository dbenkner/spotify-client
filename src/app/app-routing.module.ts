import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { GetAllUserPlaylistsComponent } from './playlists/get-all-user-playlists/get-all-user-playlists.component';
import { PlayListDetailsComponent } from './playlists/play-list-details/play-list-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'usersPlaylists', component:GetAllUserPlaylistsComponent},
  { path: 'playlistDetails/:id', component:PlayListDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
