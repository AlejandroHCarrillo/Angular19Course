import { Component, computed, input, signal } from '@angular/core';
import type { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.component.html',
  styles: ``
})
export class CountryInformationComponent {
  country = input.required<Country>();

  currentYear = computed(() => new Date().getFullYear());

}
