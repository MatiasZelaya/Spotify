import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService1 } from '../spotify/spotify.service'
import { SearchComponent } from '../search/search.component'
import { ArtistComponent } from '../Artist/artist.component'
import { ActivatedRoute, Routes, RouterModule } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'present',
    templateUrl: 'presentation.template.html',
    styleUrls: ['presentation.style.less']
})

export class PresentationComponent{
    constructor() { }
}