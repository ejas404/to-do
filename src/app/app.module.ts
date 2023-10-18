import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { AddButtonComponent } from './components/add-button/add-button.component';



@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    AddButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
