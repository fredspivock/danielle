import { Component, Input } from "@angular/core";
import {Book} from "./book";
@Component({
  selector: 'ddBookCard',
  template:`
    <div class="card-wrapper">
      <div class="book-darken">
        <img class="book-image" [src]="book.imageUrl">
       </div>
    </div>`,
  styles: [
    '.book-image {width: 100%; height: auto; -webkit-transition: -webkit-filter linear .5s; transition: filter linear .5s, -webkit-filter linear;}',
    '.book-image:hover {-webkit-filter: blur(2px);filter: blur(2px); opacity: 0.7}',
    '.book-darken {background: black}'
  ]
})

export class BookCard {
  @Input() book: Book;
}
