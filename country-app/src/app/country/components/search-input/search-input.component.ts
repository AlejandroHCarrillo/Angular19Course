import { Component, input, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styles: ``
})
export class SearchInputComponent  {
  placeholder = input('Buscar por ...');
  buscar = output<string>();

  onSearch(value: string){
    // console.log("onsearch Emitir: ", value);
    this.buscar.emit(value);
  }

}
