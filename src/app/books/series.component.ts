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

  series: any[];

  ngOnInit(): void {
    this.series = this._booksService.getSeries();
    this.series.forEach((serie) => {
      serie.state = 'inactive';
    });
  }

}
