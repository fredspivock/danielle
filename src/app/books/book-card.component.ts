import { Component, Input } from "@angular/core";
import {Book} from "./book";

@Component({
  selector: 'ddBookCard',
  template:`
    <div class="card-wrapper">
      <a [routerLink]="[book.id]">
        <div class="book-darken">
          <img class="book-image" [src]="book.imageUrl">
          <i class="fa fa-5x fa-eye eye-icon" aria-hidden="true"></i>
       </div>
      </a>
    </div>`,
  styles: [
    'a:hover .book-image {-webkit-filter: blur(2px);filter: blur(2px); opacity: 0.7; -webkit-transition: all .5s linear; -moz-transition: all .5s linear; -ms-transition: all .5s linear; -o-transition: all .5s linear;transition: all .5s linear;}',
    '.book-image { margin-bottom: -4px;width: 100%; height: 100%; box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.4)}',
    '.book-darken {background: black; height: 100%; width: 100%; margin: 8px; position: relative}',
    '.eye-icon {opacity: 0; color: white; position: absolute; z-index: 100; top: calc(50% - 40px); left: calc(50% - 40px)}',
    'a:hover .eye-icon{opacity: 1}'
  ]
})

export class BookCard {
  @Input() book: Book;
}

