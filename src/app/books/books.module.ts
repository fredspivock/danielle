import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { BookSeriesComponent } from './book-series.component';
import { BookComponent } from './book.component';
import {BooksService} from "./books.service";
import {BookCards} from "./books-cards.component";
import {BookCard} from "./book-card.component";
import {SharedModule} from "../shared/shared.module";
import {BooksIcon} from "./books-icon.component";

const bookRoutes: Routes = [
  {path: 'series/:name/:id', component: BookComponent},
  {path: 'series/:name', component: BookSeriesComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(bookRoutes),
    SharedModule
  ],
  declarations: [
    BookSeriesComponent,
    BookComponent,
    BookCards,
    BookCard,
    BooksIcon
  ],
  providers: [ BooksService ]
})

export class BooksModule {}
