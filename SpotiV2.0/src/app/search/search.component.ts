import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArtistSearch } from './artist.interface'
import { SpotifyService1 } from '../spotify/spotify.component'
import { ArtistComponent } from '../Artist/artist.component'

@Component({
    selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.less']
})

export class SearchComponent implements OnInit{
    Artist : FormGroup;
    ArtistArray:any = [ ];
    ArtistAlbums:any =[ ];
    AlbumTracks:any = [ ];
    constructor(private _spotifyService:SpotifyService1){}
    ngOnInit(){
        this.Artist = new FormGroup({
            NameArtist : new FormControl('',[Validators.required,Validators.minLength(1)])
        })
    
    }
    
    SearchArtist(){
        let artistas = this.Artist.value.NameArtist;
        let id:any
        this._spotifyService.getArtist('https://api.spotify.com/v1/search',artistas,'artist').then((response)=>{
            this.ArtistArray = response
            console.log(this.ArtistArray)
            id = response.artists.items[0].id
       /* if(id){
            this._spotifyService.getAlbums('https://api.spotify.com/v1/artists',id,'albums').then((response)=>{
                this.ArtistAlbums = response
                console.log(this.ArtistAlbums)
            })
        }*/
        })
        
    }
    getTracks(id:any){
        this._spotifyService.getTracks('https://api.spotify.com/v1/albums/',id).then((response)=>{
            this.AlbumTracks = response;
            console.log(this.AlbumTracks.items[0].preview_url);
        });
    }
     onSubmit({ value, valid }: {  value: ArtistSearch, valid: boolean }) {
    console.log(value, valid)
  }
}
