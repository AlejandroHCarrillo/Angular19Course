import { Component, inject, linkedSignal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  countryService = inject(CountryService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal(() => this.queryParam);
 
  // Version corta del codigo de abajo, solo para la version 19+
  // Vesion usando Observables (importarlo de @angular/core/rxjs-interop)
  // es mas corto y no necesita async, await ni firstValueFrom
  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query || request.query.trim().length === 0) return of([]);
      this.router.navigate(['/country/by-country'], 
        { queryParams: { query: request.query } });

      return this.countryService.searchByCountry(request.query); 
    }, 
  });

  // // Version corta del codigo de abajo, solo para la version 19+
  // countryResourceWPromeses = resource({
  //   request: () => ({ query: this.query() }),
  //   loader: async ({ request }) => {
  //     if (!request.query || request.query.trim().length === 0) return [];

  //     return await firstValueFrom ( this.countryService.searchByCountry(request.query)) 
  //   }
  // });

}
