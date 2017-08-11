import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HelloWorldComponent } from './hello-world/hello-world.component'
import { ExampleFormComponent } from './example-form/example-form.component'
import { SearchComponent } from './search/search.component'
import { AuthorizationComponent } from './Authorization-Component/authorization.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'callback' },
  { path: 'callback', component:AuthorizationComponent},
  { path: 'search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [SearchComponent,AuthorizationComponent];