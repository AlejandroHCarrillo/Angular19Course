import { Component, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'by-region-page',
  imports: [ CountryListComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  buscar = signal('');
  placeholder = signal('');
  buscarTexto(texto: string) {
    // console.log("Buscar texto by:", texto);
    this.buscar.set(texto);
  }

}
