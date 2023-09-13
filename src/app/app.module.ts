import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task2Component } from './task2/task2.component';
import { UserComponent } from './user/user.component';
import { CounterComponent } from './counter/counter.component';
import { ColorBoxcomponentComponent } from './color-boxcomponent/color-boxcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
  
    Task2Component,
       UserComponent,
       CounterComponent,
       ColorBoxcomponentComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
