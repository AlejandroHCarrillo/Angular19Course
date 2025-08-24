import { Component, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  buscar = signal('');
  placeholder = signal('');
  buscarTexto(texto: string) {
    console.log("Buscar texto by :", texto);
    this.buscar.set(texto);
  }

}
