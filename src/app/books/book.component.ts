
import {Component, OnInit} from '@angular/core';
import {Book} from './book';
import {Serie} from './series';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import {BooksService} from './books.service';

@Component({
  templateUrl: './book.html'
})

export class BookComponent implements OnInit {

  serieId: string;
  bookId: string;
  book = {};
  private sub: Subscription;
  constructor(private _route: ActivatedRoute, private _booksService: BooksService){}
  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        this.serieId = params['name'];
        this.bookId = params['id'];
      }
    );
    this._booksService.getSeries()
      .subscribe((series:Serie[]) => {
        series.forEach(item => {
          if(item.id === this.serieId) {
            let bookId: number = Number(this.bookId) - 1;
            this.book = item.books[bookId];
          }
        });
      });
  }

}
