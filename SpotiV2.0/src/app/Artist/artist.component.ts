import { Component, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component'
import { Routes, RouterModule } from '@angular/router'
import { SpotifyService1 } from '../spotify/spotify.service'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'artists',
    templateUrl: 'artist.component.html',
    styleUrls: ['artist.component.less']
})

export class ArtistComponent {
    @Input() ArtistArray: any = [];
    ArtistAlbums: any = [];
    artistas: any;
    constructor(public _DomSanitizer: DomSanitizer, private _SearchComponent: SearchComponent, private _spotifyService: SpotifyService1) {
    }
    getUrl(id: any) {
        let url = "https://open.spotify.com/follow/1/?uri=spotify:artist:";
        let url2 = "&size=basic&theme=dark";
        let url3 = url + id + url2;
        return this._DomSanitizer.bypassSecurityTrustResourceUrl(url3);

    }
}