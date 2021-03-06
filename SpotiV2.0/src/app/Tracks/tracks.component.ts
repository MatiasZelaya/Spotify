import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router'
import { SpotifyService1 } from '../spotify/spotify.service'
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'tracks',
    templateUrl: 'tracks.template.html',
    styleUrls: ['tracks.style.less']
})

export class TracksComponent implements OnInit {
    AlbumTracks: any = [];
    ArtistArray: any = [];
    ArtistAlbums: any = [];
    Favorites: any = [];
    Favorite: any = [];
    Tracks: any = [];

    date: any;
    constructor(public _DomSanitizer:DomSanitizer, private _spotifyService: SpotifyService1, private _ActivatedRoute: ActivatedRoute) {
    }
    ngOnInit() {
        this.SearchArtist(this._ActivatedRoute.snapshot.params.ArtistId);
        this.getAlbum(this._ActivatedRoute.snapshot.params.id);
        this.getTracks(this._ActivatedRoute.snapshot.params.id);
        this.getFavorites();
    }
    SearchArtist(id: any) {
        this._spotifyService.getArtist('https://api.spotify.com/v1/artists/', id).then((response) => {
            this.ArtistArray = response;
        }
        )
    }
    getAlbum(id: any) {
        if (id) {
            this._spotifyService.getAlbum('https://api.spotify.com/v1/albums/', id).then((response) => {
                this.ArtistAlbums = response;
                this.date = new Date(this.ArtistAlbums.release_date);
                this.date = this.date.getFullYear();
            })
        }
    }
    getTracks(id: any) {
        console.log(id);
        this._spotifyService.getTracks('https://api.spotify.com/v1/albums/', id).then((response) => {
            this.AlbumTracks = response;
        });
    }
    putFavorites(id: any) {
        if (this.Favorite.includes(id)) {
            this._spotifyService.deleteFavorites('https://api.spotify.com/v1/me/tracks?ids=', id).then((response) => {
                this.getFavorites();
            });
        }
        else {
            this._spotifyService.putFavorites('https://api.spotify.com/v1/me/tracks?ids=', id).then((response) => {
                this.getFavorites();
            });
        }
    }
    getFavorites() {
        this._spotifyService.getFavoritesTracks('https://api.spotify.com/v1/me/tracks?limit=50').then((response) => {
            this.Favorites = response.items
            if (this.Favorites) {
                let i = 0;
                while (this.Favorites.length > i) {
                    this.Favorite[i] = this.Favorites[i].track.id;
                    i++;
                }
            }
            console.log('favoritos', this.Favorites)
        })
    }
    getUrl(id:any){
        let url = "https://open.spotify.com/embed?uri=spotify%3Atrack%3A";
        let url2 = url + id;
        return this._DomSanitizer.bypassSecurityTrustResourceUrl(url2);
    }
}
//this.favourites.push(id)
//localStorage.setItem('favourites' , this.favourites);
