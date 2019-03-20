import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {  FunkyNgxModule  } from 'funky-ngx';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FunkyNgxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
