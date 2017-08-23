import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { SearchComponent } from '../search/search.component'


@Injectable()

export class SpotifyService1 {

  constructor(private _http: Http) {

  }

  public getArtists(api: string, Options: any, type: any): Promise<any> {
    api = api + '?q=' + Options + '&type=' + type
    let headers = new Headers({
      'Accept': 'application/json'
    })
    let token = localStorage.getItem('token');
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return this._http.get(api, { headers: headers, body: '' }).map((response) => response.json())
      .toPromise()
  }
  public getAlbums(api: string, id: any, type: any): Promise<any> {
    api = api + '/' + id + '/' + type
    let headers = new Headers({
      'Accept': 'application/json'
    })
    let token = localStorage.getItem('token');
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return this._http.get(api, { headers: headers, body: '' }).map((response) => response.json())
      .toPromise()
  }
  public getAlbum(api: string, id: any): Promise<any> {
    api = api + id
    let headers = new Headers({
      'Accept': 'application/json'
    })
    let token = localStorage.getItem('token');
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return this._http.get(api, { headers: headers, body: '' }).map((response) => response.json())
      .toPromise()
  }

  public getTracks(api: string, id: any): Promise<any> {
    api = api + id + '/tracks';
    let headers = new Headers({
      'Accept': 'application/json'
    })
    let token = localStorage.getItem('token');
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return this._http.get(api, { headers: headers, body: '' }).map((response) => response.json())
      .toPromise()
  }

  public getArtist(api: string, id: string): Promise<any> {
    api = api + id
    let headers = new Headers({
      'Accept': 'application/json'
    })
    let token = localStorage.getItem('token');
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return this._http.get(api, { headers: headers, body: '' }).map((response) => response.json())
      .toPromise()

  }

  public deleteFavorites(api: string, id: string): Promise<any> {
    api = api + id
    let headers = new Headers({
      'Accept': 'application/json'
    })
    let token = localStorage.getItem('token');
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return this._http.delete(api, { headers: headers }).toPromise()
  }

  public putFavorites(api: string, id: string): Promise<any> {
    api = api + id
    console.log(api)
    let headers = new Headers({
      'Accept': 'application/json'
    })
    let token = localStorage.getItem('token');
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return this._http.put(api, null, { headers: headers }).toPromise()
      
  }

  public getFavorites(api: string): Promise<any> {
    api = api
    let headers = new Headers({
      'Accept': 'application/json'
    })
    let token = localStorage.getItem('token');
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return this._http.get(api, { headers: headers, body: '' }).map((response) => response.json())
      .toPromise()
  }
}

//https://api.spotify.com/v1/search?q=Muse&type=track,artist