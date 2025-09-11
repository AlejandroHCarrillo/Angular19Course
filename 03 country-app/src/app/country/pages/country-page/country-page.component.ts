import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { PageNotFoundComponent } from "../../../shared/components/page-not-found/page-not-found.component";
import { CountryInformationComponent } from './country-information/country-information.component';

@Component({
  selector: 'country-page',
  imports: [PageNotFoundComponent, CountryInformationComponent],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent {
  countryService = inject(CountryService);
  countryCode = inject(ActivatedRoute).snapshot.paramMap.get('code');
 
  // Version corta del codigo de abajo, solo para la version 19+
  // Vesion usando Observables (importarlo de @angular/core/rxjs-interop)
  // es mas corto y no necesita async, await ni firstValueFrom
  countryResource = rxResource({
    request: () => ({ code: this.countryCode }),
    loader: ({ request }) => {
      if (!request.code || request.code.trim().length === 0) null;
      return this.countryService.searchCountryByCode(request.code ?? ''); 
    }, 
  });
}
