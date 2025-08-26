import { Component, inject, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Region } from '../../interfaces/region.type';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
@Component({
  selector: 'by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
 countryService = inject(CountryService);
  placeholder = signal('');
  
  selectedRegion = signal<Region| null>(null);

  public regions: Region[] = [  'Africa',   'Americas',   'Asia',   'Europe',   'Oceania',   'Antarctic' ];

  // Version corta del codigo de abajo, solo para la version 19+
  // Vesion usando Observables (importarlo de @angular/core/rxjs-interop)
  // es mas corto y no necesita async, await ni firstValueFrom
  countryResource = rxResource({
    request: () => ({ region: this.selectedRegion() }),
    loader: ({ request }) => {
      if (!request.region || request.region.trim().length === 0) return of([]);
      return this.countryService.searchByRegion(request.region); 
    }, 
  });

}
