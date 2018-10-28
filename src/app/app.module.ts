import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {SeriesComponent} from './books/series.component';

import { AppComponent } from './app.component';
import {BooksModule} from './books/books.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

const appRouter: Routes = [
  {path: 'series', component: SeriesComponent},
  {path: '', redirectTo: '/series', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule.forRoot(appRouter),
    BooksModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
