import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Region } from '../../interfaces/region.type';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam(queryParam: string ): Region {
  queryParam = queryParam.toLowerCase().trim();  
  const validRegions : Record<string, Region> = {
    africa: 'Africa',
    americas: 'Americas',
    asia: 'Asia',
    europe: 'Europe',
    oceania: 'Oceania',
    antarctic: 'Antarctic'
  };
  return validRegions[queryParam] ?? 'Americas';
}

@Component({
  selector: 'by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
 countryService = inject(CountryService);
  placeholder = signal('');
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  // console.log(this.queryParam);

  selectedRegion = linkedSignal<Region| null>(() => validateQueryParam(this.queryParam));

  public regions: Region[] = [  'Africa',   'Americas',   'Asia',   'Europe',   'Oceania',   'Antarctic' ];

  // Version corta del codigo de abajo, solo para la version 19+
  // Vesion usando Observables (importarlo de @angular/core/rxjs-interop)
  // es mas corto y no necesita async, await ni firstValueFrom
  countryResource = rxResource({
    request: () => ({ region: this.selectedRegion() }),
    loader: ({ request }) => {
      if (!request.region || request.region.trim().length === 0) return of([]);
      this.router.navigate(['/country/by-region'], 
        { queryParams: { query: request.region } });

      return this.countryService.searchByRegion(request.region); 
    }, 
  });

}
