import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host:{ "(window:scroll)":"onScroll($event)"}
})
export class AppComponent {
  onScroll(e) {
    console.log(e.srcElement.scrollingElement.scrollTop);
  }
}
