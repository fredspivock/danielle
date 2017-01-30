import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {BooksService} from './books.service';
import { Serie } from './series';
import { SharedModule } from '../shared/shared.module'

@Component({
  templateUrl: "./bio.html",
  styleUrls: ['./books.css']
})

export class BioComponent {
  series = {};
  private sub: Subscription;
  constructor(private _route: ActivatedRoute, private _booksService: BooksService){}
}
