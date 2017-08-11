import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthorizationService } from './Authorization/authorization.service'
import { AppComponent } from './app.component';
import { SpotifyService1 } from './spotify/spotify.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { ArtistComponent } from "./Artist/artist.component";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ArtistComponent,
    SearchComponent,
    routedComponents    
  ],
  bootstrap: [AppComponent],
  providers: [SpotifyService1,AuthorizationService]
})
export class AppModule { }
