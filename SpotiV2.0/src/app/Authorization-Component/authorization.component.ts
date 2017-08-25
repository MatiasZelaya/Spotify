import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from "@angular/router";


@Component({
    selector: 'Authorization',
  templateUrl: 'authorization.component.html',
  styleUrls: ['authorization.component.less']
})

export class AuthorizationComponent implements OnInit{
  request:any = [ ]
  answer:any = [ ]
  constructor(private route:ActivatedRoute){}
  scope = `user-follow-modify user-follow-read user-library-read user-library-modify user-read-private user-read-birthdate user-read-email user-top-read`
  client_id = '08889519b4c24d199dcfa8a0c731c598'
  redirect_uri='http://localhost:8080/set-token'
  response_type='token'
  token:string
    url1 = 'http://localhost:8080/home';
    url = 'https://accounts.spotify.com/authorize?' +
            'response_type=' + this.response_type +
            '&client_id=' + this.client_id +
            '&scope=' + this.scope +
            '&redirect_uri=' + this.redirect_uri
            
  ngOnInit(){
    window.location.href = this.url
    let tokenRoute = this.route.fragment.map(fragment => fragment);
    tokenRoute.subscribe(fragment => {
      let fragment1 = !!fragment ? fragment.match(/^(.*?)&/) : '';
         if (!!fragment1) {
        this.token = fragment1[1].replace('access_token=', '');
         localStorage.setItem('token',this.token)
         window.location.href = this.url1;
        }  
    }) 
    /*this.route.snapshot.params.subscribe((snapshot:any) =>{
        console.log(snapshot)
    })*/
}
    }
