import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AddMovieFormComponent } from './addmovie/addmovie.component';
import { MovieListComponent } from './movielist/movielist.component';
import { EditMovieFormComponent } from './edit-movie-form/edit-movie-form.component';


const routes: Routes = [
  {path:'',component:UserComponent,pathMatch:'full'},
  {path:'movies',component:MovieListComponent,pathMatch:'full'},
  {path:'movies/add',component:AddMovieFormComponent,pathMatch:'full'},
  { path: 'movies/edit/:id', component: EditMovieFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
