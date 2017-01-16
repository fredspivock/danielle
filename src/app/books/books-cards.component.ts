import {Component, Input} from "@angular/core";
import {Serie} from "./series";

@Component({
  selector: 'ddBookCards',
  template: `
        <div fxLayout="row" fxLayoutWrap fxLayoutAlign="start" class="cards-container">
            <ddBookCard [book]="book" [serieId]="serie.id" *ngFor="let book of serie.books" fxFlex.gt-lg="20" fxFlex.lg="20" fxFlex.md="25" fxFlex.sm="33" fxFlex="50"></ddBookCard>
        </div>`,
  styles: [
    '.cards-container { padding-top: 20px; padding-bottom: 20px}'
  ]
})

export class BookCards {
  @Input() serie: Serie;
}

