import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Serie } from "./series";

@Injectable()
export class BooksService {
  private _bookUrl = 'app/series.json';

  constructor(private _http: Http) {}

  getSeries(): Observable<Serie[]> {
    return this._http.get(this._bookUrl)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
