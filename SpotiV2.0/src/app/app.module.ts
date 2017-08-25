import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SpotifyService1 } from './spotify/spotify.service';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { ArtistComponent } from "./Artist/artist.component";
import { AlbumComponent } from "./Albums/album.component";
import { AuthorizationComponent } from "./Authorization-Component/authorization.component";
import { TracksComponent } from "./Tracks/tracks.component";
import { PresentationComponent } from "./Presentation/presentantion.component";
import { FavoritesComponent } from "./Favorites/favorite.component";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    PresentationComponent,
    TracksComponent,
    FavoritesComponent,
    AuthorizationComponent
    //routedComponents    
  ],
  bootstrap: [AppComponent],
  providers: [SpotifyService1]
})
export class AppModule { }
