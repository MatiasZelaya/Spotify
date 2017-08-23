import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpotifyService1 } from '../spotify/spotify.service'
import { ArtistSearch } from './artist.interface'
import { ArtistComponent } from '../Artist/artist.component'
import { AlbumComponent } from '../Albums/album.component'

@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.less']
})

export class SearchComponent implements OnInit {
    Artist: FormGroup;
    ArtistArray: any = [];
    AlbumTracks: any = [];
    artistas: any;
    constructor(private _spotifyService: SpotifyService1) { }
    ngOnInit() {
        this.Artist = new FormGroup({
            NameArtist: new FormControl('', [Validators.required, Validators.minLength(1)])
        })

    }
    SearchArtist() {
        this.artistas = this.Artist.value.NameArtist;
        this.Artist.controls.NameArtist.setValue(null);
        let id: any
        this._spotifyService.getArtists('https://api.spotify.com/v1/search', this.artistas, 'artist').then((response) => {
            this.ArtistArray = response
            console.log(this.ArtistArray)
        })

    }
    onSubmit({ value, valid }: { value: ArtistSearch, valid: boolean }) {
        console.log(value, valid)
    }
}
