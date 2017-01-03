import {Component, Input} from "@angular/core";
import {Book} from "./book";

@Component({
  selector: 'ddBookCards',
  template: `
      <md-grid-list cols="5" rowHeight="9:16" gutterSize="15px">
        <md-grid-tile
            *ngFor="let book of books">
          <ddBookCard [book]="book"></ddBookCard>
        </md-grid-tile>
      </md-grid-list>`,
  styles: []
})

export class BookCards {
  @Input() books: Book[];
}

