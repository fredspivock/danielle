import { Component, OnInit} from "@angular/core";
import {BooksService} from './books.service';

@Component({
  selector: "ddSeriesCarousel",
  templateUrl: "./series-carousel.html",
  styleUrls: ['./series-carousel.css']
})

export class SeriesCarouselComponent implements OnInit{

  constructor(private _booksService: BooksService){}
  series = [];

  ngOnInit(): void {
    this.series = this._booksService.getSeries();
  }

}
