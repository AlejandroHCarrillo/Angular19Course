import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Country } from '../../interfaces/country.interface';
import * as router from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, router.RouterLink],
  templateUrl: './country-list.component.html',
  styles: ``
})
export class CountryListComponent {
  countries = input.required<Country[]>();

  errorMessage = input<string|unknown|null|undefined>('');
  isLoading = input<boolean>(false);
  isEmpty = input<boolean|unknown|null|undefined>(false);
}
  
