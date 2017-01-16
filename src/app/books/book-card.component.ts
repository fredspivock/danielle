import { Component, Input } from "@angular/core";
import {Book} from "./book";

@Component({
  selector: 'ddBookCard',
  template:`
   <div class="card-padding">
    <div class="card-wrapper">
      <a [routerLink]="['/series', serieId, book.id]">
        <div class="book-darken">
          <img class="book-image" [src]="book.imageUrl">
          <i class="fa fa-5x fa-eye eye-icon" aria-hidden="true"></i>
          <span class="book-title">{{book.title}}</span>
       </div>
      </a>
    </div>
  </div>`,
  styles: [
    'a:hover .book-image {-webkit-filter: blur(2px);filter: blur(2px); opacity: 0.7; -webkit-transition: all .5s linear; -moz-transition: all .5s linear; -ms-transition: all .5s linear; -o-transition: all .5s linear;transition: all .5s linear;}',
    '.book-image { margin-bottom: -4px;width: 100%; height: 100%; box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.4)}',
    '.book-darken {background: black; height: 100%; width: 100%;  position: relative}',
    '.eye-icon {opacity: 0; color: white; position: absolute; z-index: 100; top: calc(30%); left: calc(50% - 40px)}',
    'a:hover .eye-icon{opacity: 1}',
    '.card-padding {padding: 3%}',
    '.book-title {font-size: 1.5em; color: white; text-align: center; position: absolute; top: 50%; left: 10%; width: 80%; visibility: hidden; word-wrap: break-word }',
    'a:hover .book-title {visibility: visible}'
  ]
})

export class BookCard {
  @Input() book: Book;
  @Input() serieId;
}

