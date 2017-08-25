import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component'
import { Routes, RouterModule, ActivatedRoute } from '@angular/router'
import { SpotifyService1 } from '../spotify/spotify.service'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'artists',
    templateUrl: 'artist.component.html',
    styleUrls: ['artist.component.less']
})

export class ArtistComponent implements OnInit {
    ArtistArray: any = [];
    ArtistAlbums: any = [];
    artistas: any;
    _SearchComponent:SearchComponent;
    params:any;
    search:any;
    constructor(public _DomSanitizer: DomSanitizer, private _spotifyService: SpotifyService1, private _ActivedRoute: ActivatedRoute) {
        this.params = this._ActivedRoute.params.subscribe(
            params => {
                this.search = params['search'];
                this.getArtists(this.search);
            }
        )
    }
    ngOnInit() {
        this.getArtists(this.search);
        console.log(this._ActivedRoute.params);
    }
    getUrl(id: any) {
        let url = "https://open.spotify.com/follow/1/?uri=spotify:artist:";
        let url2 = "&size=basic&theme=dark";
        let url3 = url + id + url2;
        return this._DomSanitizer.bypassSecurityTrustResourceUrl(url3);
    }

    getArtists(id: string) {
        this._spotifyService.getArtists('https://api.spotify.com/v1/search', id, 'artist').then((response) => {
            this.ArtistArray = response
            console.log(this.ArtistArray)
        })
    }
}