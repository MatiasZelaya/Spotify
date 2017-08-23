import { Component, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component'
import { Routes, RouterModule } from '@angular/router'
import { SpotifyService1 } from '../spotify/spotify.service'

@Component({
    selector: 'artists',
    templateUrl: 'artist.component.html',
    styleUrls: ['artist.component.less']
})

export class ArtistComponent {
    @Input() ArtistArray: any = [];
    ArtistAlbums: any = [];
    artistas: any;
    constructor(private _SearchComponent: SearchComponent, private _spotifyService: SpotifyService1) {
    }
}