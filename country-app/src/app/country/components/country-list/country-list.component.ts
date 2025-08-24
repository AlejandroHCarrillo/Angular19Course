import { Component, input } from '@angular/core';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.component.html',
  styles: ``
})
export class CountryListComponent {
  filtro = input<string>('');

}
