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

@NgModule({
  declarations: [
    AppComponent,
  
    
       UserComponent,
       CounterComponent,
       ColorBoxcomponentComponent,
       BoxcomponentComponent,
       MovieComponent,
       AddmovieComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
