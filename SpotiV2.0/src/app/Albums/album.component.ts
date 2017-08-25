import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService1 } from '../spotify/spotify.service'
import { SearchComponent } from '../search/search.component'
import { ArtistComponent } from '../Artist/artist.component'
import { ActivatedRoute, Routes, RouterModule } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'albums',
    templateUrl: 'album.component.html',
    styleUrls: ['album.component.less']
})

export class AlbumComponent implements OnInit {
    @Input() ArtistForm: any = [];
    ArtistAlbums: any = [];
    ArtistArray: any = [];
    AlbumTracks: any = [];
    FavoriteAlbums: any = [];
    Favorite: any = [];

    constructor(private _spotifyService: SpotifyService1, private _ActivatedRoute: ActivatedRoute) {
    }
    ngOnInit() {
        this.SearchArtist(this._ActivatedRoute.snapshot.params.id);
        this.getAlbums(this._ActivatedRoute.snapshot.params.id);
        this.getFavoriteAlbums();
    }
    getAlbums(id: any) {
        if (id) {
            this._spotifyService.getAlbums('https://api.spotify.com/v1/artists', id, 'albums').then((response) => {
                this.ArtistAlbums = response
                console.log(this.ArtistAlbums)
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
    getFavoriteAlbums() {
        this._spotifyService.getFavoritesAlbums('https://api.spotify.com/v1/me/albums?ids=').then((response) => {
            this.FavoriteAlbums = response.items
            if (this.Favorite) {
                let i = 0;
                while (this.FavoriteAlbums.length > i) {
                    this.Favorite[i] = this.FavoriteAlbums[i].album.id;
                    i++;
                }
            }
        })
    }

    putFavoritesAlbums(id: any) {
        if (this.Favorite.includes(id)) {
            this._spotifyService.deleteFavoritesAlbums('https://api.spotify.com/v1/me/albums?ids=', id).then((response) => {
                this.getFavoriteAlbums();
            });
        }
        else {
            this._spotifyService.putFavorites('https://api.spotify.com/v1/me/albums?ids=', id).then((response) => {
                this.getFavoriteAlbums();
            });
        }
    }
}