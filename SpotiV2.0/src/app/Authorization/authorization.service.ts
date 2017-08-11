import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { ActivatedRoute,Params } from "@angular/router";
import 'rxjs/add/operator/map';

@Injectable()

export class AuthorizationService{

constructor(private _http:Http){} 

    public Authorization(api:string,client_id:any,response_type:any,redirect_uri:any,scope:any): Promise<any>{
        api = api + 'client_id=' + client_id + '&response_type=' + response_type + '&redirect_uri=' + redirect_uri + '&scope=' + scope
    return this._http.get(api).map((response)=>response.json()).toPromise()
    } 
    public sendToken(api:string,grand_type:any,code:any,redirect_uri:any) : Promise<any>{
        let body = '68a037b14896443397df02d518980701:11be034e2d484cac98bcd48eabb61db6'
        api = api + 'grand_type=' + grand_type + '&code=' + code + '&redirect_uri' + redirect_uri
        return this._http.post(api,body).map((response)=>response.json()).toPromise()
    }
    
}
/* Autorization https://accounts.spotify.com/authorize/
                 ?client_id=5fe01282e44241328a84e7c5cc169165&
                 response_type=code&
                 redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&
                 scope=user-read-private%20user-read-email&state=34fFs29kd09
*/

