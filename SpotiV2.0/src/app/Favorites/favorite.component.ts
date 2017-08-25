import { Component, OnInit } from '@angular/core';
import { SpotifyService1 } from '../spotify/spotify.service';

@Component({
    selector: 'favorites',
    templateUrl: 'favorite.template.html',
    styleUrls: ['favorite.style.less']
})

export class FavoritesComponent implements OnInit{
    FavoriteAlbums:any = [];
    FavoriteTracks:any = [];
    FavoriteArtists:any = [];

    constructor(private _spotifyService:SpotifyService1) { }
    ngOnInit(){
        this.getFavoriteAlbums();
        this.getFavoriteArtists();
        this.getFavoriteTracks();
    }
    getFavoriteArtists(){
        this._spotifyService.getFavoritesArtists("https://api.spotify.com/v1/me/following?type=artist&limit=50").then((response) => {
            this.FavoriteArtists = response.artists.items;
            console.log('Artists', this.FavoriteArtists);
        });
    }
    getFavoriteAlbums(){
        this._spotifyService.getFavoritesAlbums("https://api.spotify.com/v1/me/albums?limit=50").then((response) => {
            this.FavoriteAlbums = response.items;
            console.log('Albums', this.FavoriteAlbums);
        });
    }
    getFavoriteTracks(){
        this._spotifyService.getFavoritesTracks("https://api.spotify.com/v1/me/tracks?limit=10").then((response) => {
            this.FavoriteTracks = response.items;
            console.log('Tracks', this.FavoriteTracks);
        })
    }
}