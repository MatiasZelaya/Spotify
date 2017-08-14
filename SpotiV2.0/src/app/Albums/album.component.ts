import { Component, Input } from '@angular/core';
import { SpotifyService1 } from '../spotify/spotify.component'
import { SearchComponent } from '../search/search.component'
import { ArtistComponent } from '../Artist/artist.component'

@Component({
    selector: 'albums',
    templateUrl: 'album.component.html',
    styleUrls: ['album.component.less'],
    providers: [SpotifyService1]
})

export class AlbumComponent {
    @Input() ArtistAlbums:any;
    constructor(private _SearchComponent: SearchComponent, private _spotifyService: SpotifyService1) {
    }
}