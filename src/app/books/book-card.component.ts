import { Component, Input } from "@angular/core";
import {Book} from "./book";

@Component({
  selector: 'ddBookCard',
  template:`
    <div class="card-wrapper">
      <a [routerLink]="[book.id]">
        <div class="book-darken">
          <img class="book-image" [src]="book.imageUrl">
       </div>
      </a>
    </div>`,
  styles: [
    '.book-image { margin-bottom: -4px;width: 100%; height: 100%; -webkit-transition: -webkit-filter linear .5s; transition: filter linear .5s, -webkit-filter linear;}',
    '.book-image:hover {-webkit-filter: blur(2px);filter: blur(2px); opacity: 0.7}',
    '.book-darken {background: black; height: 100%; width: 100%; margin: 4px; -webkit-transition: all .5s linear; -moz-transition: all .5s linear; -ms-transition: all .5s linear; -o-transition: all .5s linear;transition: all .5s linear;}'
  ]
})

export class BookCard {
  @Input() book: Book;
}

