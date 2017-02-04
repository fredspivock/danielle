import { Component, OnInit } from "@angular/core";
import {BooksService} from './books.service';
import { Serie } from './series';

@Component({
  selector: "ddSeries",
  templateUrl: "./series.html",
  styleUrls: ['./series.css']
})

export class SeriesComponent implements OnInit{

  constructor(private _booksService: BooksService){}

  series: Serie[];

  ngOnInit(): void {
    this.series = this._booksService.getSeries();

  }

}
