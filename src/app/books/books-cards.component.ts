import {Component, Input} from "@angular/core";
import {Serie} from "./series";

@Component({
  selector: 'ddBookCards',
  template: `
        <div fxLayout="row" fxLayoutWrap fxLayoutAlign="space-between" class="cards-container">
            <ddBookCard [book]="book" *ngFor="let book of serie.books" fxFlex.="19" fxFlex.lg="19" fxFlex.md="24" fxFlex.sm="32" fxFlex="49.5"></ddBookCard>
        </div>`,
  styles: [
    '.cards-container { padding-top: 20px; padding-bottom: 20px}'
  ]
})

export class BookCards {
  @Input() serie: Serie;
}

