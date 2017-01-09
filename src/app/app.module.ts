import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import {BooksModule} from "./books/books.module";;

const appRouter: Routes = [
  {path:'auteur', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouter),
    MaterialModule.forRoot(),
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
