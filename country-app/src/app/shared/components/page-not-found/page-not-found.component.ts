import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'page-not-found',
  imports: [],
  templateUrl: './page-not-found.component.html',
  styles: ``
})
export class PageNotFoundComponent {
  location = inject(Location);

  goBack() {
    this.location.back();
  } 
}
