import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host:{ "(window:scroll)":"onScroll($event)"}
})
export class AppComponent {
  isScrolled = false;
  onScroll(e) {
    if(e.srcElement.scrollingElement.scrollTop > 45) {
      this.isScrolled = true;
    }
    else {
      this.isScrolled = false;
    }
  }
}
