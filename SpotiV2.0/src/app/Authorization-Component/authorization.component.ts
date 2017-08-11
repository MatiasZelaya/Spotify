import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../Authorization/authorization.service'
import { ActivatedRoute,Params } from "@angular/router";


@Component({
    selector: 'Authorization',
  templateUrl: 'authorization.component.html',
  styleUrls: ['authorization.component.less']
})

export class AuthorizationComponent implements OnInit{
  request:any = [ ]
  answer:any = [ ]
  constructor(private route:ActivatedRoute, private _Authorization:AuthorizationService){}
  scope = `playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private streaming ugc-image-upload user-follow-modify user-follow-read user-library-read user-library-modify user-read-private user-read-birthdate user-read-email user-top-read`
  client_id = '68a037b14896443397df02d518980701'
  redirect_uri='http://localhost:8080/callback'
  response_type='token'
  token:string
    url1 = 'http://localhost:8080/search';
    url = 'https://accounts.spotify.com/authorize?' +
            'response_type=' + this.response_type +
            '&client_id=' + this.client_id +
            '&scope=' + this.scope +
            '&redirect_uri=' + this.redirect_uri
            
  ngOnInit(){
    window.location.href = this.url
    let tokenRoute = this.route.fragment.map(fragment => fragment);
    tokenRoute.subscribe(fragment => {
      let fragment1 = fragment.match(/^(.*?)&/);
         if (fragment1) {
        this.token = fragment1[1].replace('access_token=', '');
         return localStorage.setItem('token',this.token)
        }  
    }) 
      window.location.href = this.url1;
}
    }
 /* getToukens(){
    let code:any
    this._Authorization.sendToken('https://accounts.spotify.com/api/token','authorization_code',code,'http://localhost:8080/callback')
    .then((response)=>{
      this.answer = response
      console.log(this.answer)
    })
  }
}*/