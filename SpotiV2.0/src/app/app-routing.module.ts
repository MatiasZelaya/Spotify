import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SearchComponent } from './search/search.component'
import { AuthorizationComponent } from './Authorization-Component/authorization.component'
import { ArtistComponent } from "./Artist/artist.component";
import { AlbumComponent } from "./Albums/album.component";
import { TracksComponent } from "./Tracks/tracks.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'set-token' },
  { path: 'set-token', component: AuthorizationComponent },
  { path: 'search', component: SearchComponent },
  { path: 'albums/:name/:id', component: AlbumComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'tracks/:name/:ArtistId/:album/:id', component: TracksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const routedComponents = [SearchComponent,AuthorizationComponent,ArtistComponent,AlbumComponent];