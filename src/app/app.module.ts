import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CounterComponent } from './counter/counter.component';
import { ColorBoxcomponentComponent } from './color-boxcomponent/color-boxcomponent.component';
import { BoxcomponentComponent } from './boxcomponent/boxcomponent.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
  
    
       UserComponent,
       CounterComponent,
       ColorBoxcomponentComponent,
       BoxcomponentComponent,
       MovieComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
