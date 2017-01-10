import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {BooksService} from './books.service';
import { Serie } from './series';
import { SharedModule } from '../shared/shared.module'

@Component({
  templateUrl: "./books.html",
  styleUrls: ['./books.css']
})

export class BookSeriesComponent implements OnInit, OnDestroy{

  serieId: string = '';
  serie = {};
  private sub: Subscription;
  constructor(private _route: ActivatedRoute, private _booksService: BooksService){}

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        this.serieId = params['name']
      }
    );
    this._booksService.getSeries().forEach(item => {
          if(item.id === this.serieId) {
            this.serie = item;
          }
        });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
