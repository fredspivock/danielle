import {Component, Input} from "@angular/core";
import {Serie} from "./series";

@Component({
  selector: 'ddBooksIcons',
  templateUrl: './books-icon.html',
  styleUrls: ['./books-icon.css']
})

export class BooksIcon {
  @Input() serie:Serie
}

