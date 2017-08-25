import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpotifyService1 } from '../spotify/spotify.service'
import { ArtistSearch } from './artist.interface'
import { ArtistComponent } from '../Artist/artist.component'
import { AlbumComponent } from '../Albums/album.component'
import { PresentationComponent } from '../Presentation/presentantion.component'
import { Router } from "@angular/router";


@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.less']
})

export class SearchComponent implements OnInit {
    Artist: FormGroup;
    ArtistArray: any = [];
    artistas: any;
    ArtistsAlbums: any = [];
    data: any;
    constructor(private _spotifyService: SpotifyService1, private route: Router) { }
    ngOnInit() {
        this.Artist = new FormGroup({
            NameArtist: new FormControl('', [Validators.required, Validators.minLength(1)])
        })
        this.data = 'Type the name of your favorite artist';
    }
    SearchArtist() {
        this.artistas = this.Artist.value.NameArtist;
        this.Artist.controls.NameArtist.setValue(null);
        let id: any
        let url = "artists/" + this.artistas
        this.route.navigateByUrl(url)
    }
    onSubmit({ value, valid }: { value: ArtistSearch, valid: boolean }) {
        console.log(value, valid)
    }
}
