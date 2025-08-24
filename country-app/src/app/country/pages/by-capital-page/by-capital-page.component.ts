import { Component, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  buscar = signal('');
  placeholder = signal('');
  buscarTexto(texto: string) {
    console.log("Buscar texto by capital :", texto);
    this.buscar.set(texto);
  }

}
