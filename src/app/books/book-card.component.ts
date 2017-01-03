import { Component, Input } from "@angular/core";
import {Book} from "./book";
@Component({
  selector: 'ddBookCard',
  template:`
    <md-card>
      <img md-card-image [src]="book.imageUrl">
    </md-card>`
})

export class BookCard {
  @Input() book: Book;
}
