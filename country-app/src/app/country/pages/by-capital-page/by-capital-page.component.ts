import { CountryService } from './../../services/country.service';
import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { rxResource } from '@angular/core/rxjs-interop';
import { firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);
  query = signal('');
 
  // Version corta del codigo de abajo, solo para la version 19+
  // Vesion usando Observables (importarlo de @angular/core/rxjs-interop)
  // es mas corto y no necesita async, await ni firstValueFrom
  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query || request.query.trim().length === 0) return of([]);
      return this.countryService.searchByCapital(request.query); 
    }, 
  });
  
  // vesion usando promesas usa firstValueFrom para obtener la info sin nencesidad de la promesa
  countryResourceWPromeses = resource({
    request: () => ({ query: this.query() }),
    loader: async ({ request }) => {
      if (!request.query || request.query.trim().length === 0) return [];

      return await firstValueFrom ( this.countryService.searchByCapital(request.query)) 
    }
  });

}

  // buscar = signal('');
  // placeholder = signal('');
  
  // isLoading = signal(false);
  // isError = signal<string|null>(null);
  // countries = signal<Country[]>([]);

//   onSearch(query: string) {
//     // Buscar por capital con las versiones anteriores a Angular 19
//     console.log("Buscar texto by capital :", query);

//     if (!query || query.trim().length === 0) return;
//     if (this.isLoading()) return;

//     console.log("Estamos aqui");
    
//     this.isLoading.set(true);
//     this.isError.set(null);
//     this.countries.set([]);

//     this.buscar.set(query);
// // (data) => {
// //       this.isLoading.set(false);
// //       this.countries.set(data);      
// //       console.log("Resultados de la búsqueda:", data);
//     this.countryService.searchByCapital(query)
//     .subscribe({
//       next: (countries) => {
//         this.isLoading.set(false);
//         this.countries.set(countries);
//         console.log("Resultados de la búsqueda:", countries);
//       },
//       error: (err) => {
//         this.isLoading.set(false);
//         this.countries.set([]);                
//         this.isError.set(err);
//         console.log(err);
//       }, complete: () => {
//         console.log("Búsqueda completada");
//       }
//     });
    

