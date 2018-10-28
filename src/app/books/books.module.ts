import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BookSeriesComponent } from './book-series.component';
import { BookComponent } from './book.component';
import {BooksService} from './books.service';
import {BookCards} from './books-cards.component';
import {BookCard} from './book-card.component';
import {SharedModule} from '../shared/shared.module';
import {BooksIcon} from './books-icon.component';
import {BioComponent} from './bio.component';
import {SeriesComponent} from './series.component';
import {SeriesPageComponent} from './series-page.component';
import {SeriesCarouselComponent} from './series-carousel.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButton, MatRippleModule} from '@angular/material';

const bookRoutes: Routes = [
  {path: 'series', component: SeriesPageComponent},
  {path: 'series/:name/:id', component: BookComponent},
  {path: 'series/:name', component: BookSeriesComponent},
  {path: 'auteur', component: BioComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(bookRoutes),
    SharedModule,
    FlexLayoutModule,
    MatRippleModule
  ],
  declarations: [
    BookSeriesComponent,
    BookComponent,
    BookCards,
    BookCard,
    BooksIcon,
    BioComponent,
    SeriesComponent,
    SeriesPageComponent,
    SeriesCarouselComponent,
    MatButton
  ],
  providers: [ BooksService ]
})

export class BooksModule {}
