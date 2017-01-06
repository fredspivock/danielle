import {Component, Input} from "@angular/core";
import {Book} from "./book";
import {Serie} from "./series";

@Component({
  selector: 'ddBookCards',
  template: `
      <md-grid-list cols="5" rowHeight="9:16" gutterSize="15px">
        <md-grid-tile
            *ngFor="let book of serie.books">
          <a [routerLink]="['/series/' + serie.id + '/' + book.id]">
            <ddBookCard [book]="book"></ddBookCard>
          </a>
        </md-grid-tile>
      </md-grid-list>`,
  styles: []
})

export class BookCards {
  @Input() serie: Serie;
}

