import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CounterComponent } from './counter/counter.component';
import { ColorBoxcomponentComponent } from './color-boxcomponent/color-boxcomponent.component';
import { BoxcomponentComponent } from './boxcomponent/boxcomponent.component';
import { MovieComponent } from './movie/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddmovieComponent } from './addmovie/addmovie.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

@NgModule({
  declarations: [
    AppComponent,
  
    
       UserComponent,
       CounterComponent,
       ColorBoxcomponentComponent,
       BoxcomponentComponent,
       MovieComponent,
       AddmovieComponent,
       MoviedetailsComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
