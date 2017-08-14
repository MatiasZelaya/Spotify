import { Component, Input } from '@angular/core';
import { SpotifyService1 } from '../spotify/spotify.component'
import { SearchComponent } from '../search/search.component'

@Component({
    selector: 'artist',
    templateUrl: 'artist.component.html',
    styleUrls: ['artist.component.less'],
    providers: [SpotifyService1]
})

export class ArtistComponent {
    @Input() ArtistArray: any = [];
    ArtistAlbums: any = [];
    id: any;
    constructor(private _SearchComponent: SearchComponent, private _spotifyService: SpotifyService1) {
    }
    SearchArtist() {
        let artistas = this._SearchComponent.Artist.value.NameArtist;
        console.log(artistas);
        this._spotifyService.getArtist('https://api.spotify.com/v1/search', artistas, 'artist').then((response) => {
            this.ArtistArray = response
            console.log(this.ArtistArray)
        }
        )
    }
    getAlbums(id: any) {
        if (id) {
            this._spotifyService.getAlbums('https://api.spotify.com/v1/artists', id, 'albums').then((response) => {
                this.ArtistAlbums = response
                console.log(this.ArtistAlbums)
            })
        }
    }
}