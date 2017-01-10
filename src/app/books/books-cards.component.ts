import {Component, Input} from "@angular/core";
import {Serie} from "./series";

@Component({
  selector: 'ddBookCards',
  template: `
        <div fxLayout="row" fxLayoutWrap fxLayoutAlign="space-between">
            <ddBookCard [book]="book" *ngFor="let book of serie.books" fxFlex.lg="14" fxFlex.md="19" fxFlex.sm="32.5" fxFlex="49.5"></ddBookCard>
        </div>`,
  styles: []
})

export class BookCards {
  @Input() serie: Serie;
}

