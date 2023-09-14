import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';
import { AddmovieComponent } from './addmovie/addmovie.component';


const routes: Routes = [
  {path:'',component:UserComponent,pathMatch:'full'},
  {path:'movies',component:AddmovieComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
