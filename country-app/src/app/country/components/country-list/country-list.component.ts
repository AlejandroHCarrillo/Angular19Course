import { Component, input } from '@angular/core';
import { JsonPipe, DecimalPipe } from '@angular/common';
import { Country } from '../../interfaces/country.interface';
import { RouterLink } from '@angular/router';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'country-list',
  imports: [JsonPipe, DecimalPipe, RouterLink],
  templateUrl: './country-list.component.html',
  styles: ``
})
export class CountryListComponent {
  countries = input.required<Country[]>();

  errorMessage = input<string|unknown|null|undefined>('');
  isLoading = input<boolean>(false);
  isEmpty = input<boolean|unknown|null|undefined>(false);
}
  
