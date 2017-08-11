import { Component } from '@angular/core';
import { SpotifyService1 } from '../spotify/spotify.component'
import { SearchComponent } from '../search/search.component'

@Component({
    selector: 'artist',
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.less'],
  providers: [SpotifyService1]
})

export class ArtistComponent{
    ArtistArray:any = [ ];
    constructor(private _SearchComponent:SearchComponent, private _spotifyService:SpotifyService1){
    }
     SearchArtist(){
        let artistas = this._SearchComponent.Artist.value.NameArtist;
        console.log(artistas);
        this._spotifyService.getArtist('https://api.spotify.com/v1/search',artistas,'artist').then((response)=>{
            this.ArtistArray = response
            console.log(this.ArtistArray)
            }
    )}
}