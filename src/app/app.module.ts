import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CounterComponent } from './counter/counter.component';
import { ColorBoxcomponentComponent } from './color-boxcomponent/color-boxcomponent.component';
import { BoxcomponentComponent } from './boxcomponent/boxcomponent.component';
import { MovieComponent } from './movie/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMovieFormComponent } from './addmovie/addmovie.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MovieListComponent } from './movielist/movielist.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import { EditMovieFormComponent } from './edit-movie-form/edit-movie-form.component';





@NgModule({
  declarations: [
    AppComponent,
  
    
       UserComponent,
       CounterComponent,
       ColorBoxcomponentComponent,
       BoxcomponentComponent,
       MovieComponent,
       
  
       MovieListComponent,
       AddMovieFormComponent,
       EditMovieFormComponent
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,ReactiveFormsModule,HttpClientModule,MatInputModule,MatIconModule,
    MatBadgeModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
