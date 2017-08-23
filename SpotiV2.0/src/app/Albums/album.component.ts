import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService1 } from '../spotify/spotify.service'
import { SearchComponent } from '../search/search.component'
import { ArtistComponent } from '../Artist/artist.component'
import { ActivatedRoute, Routes, RouterModule } from "@angular/router";

@Component({
    selector: 'albums',
    templateUrl: 'album.component.html',
    styleUrls: ['album.component.less']
})

export class AlbumComponent implements OnInit {
    ArtistAlbums: any = [];
    ArtistArray: any = [];
    AlbumTracks:any = [];
    constructor(private _spotifyService: SpotifyService1, private _ActivatedRoute: ActivatedRoute) {
    }
    ngOnInit() {
        this.SearchArtist(this._ActivatedRoute.snapshot.params.id);
        this.getAlbums(this._ActivatedRoute.snapshot.params.id);
        console.log(this._ActivatedRoute.snapshot.params.id);
    }
    getAlbums(id: any) {
        if (id) {
            this._spotifyService.getAlbums('https://api.spotify.com/v1/artists', id, 'albums').then((response) => {
                this.ArtistAlbums = response
            })
        }
    }
    SearchArtist(id: any) {
        this._spotifyService.getArtist('https://api.spotify.com/v1/artists/', id).then((response) => {
            this.ArtistArray = response
            console.log('Artistas', this.ArtistArray);
        }
        )
    }
}