import { Component, effect, input, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styles: ``
})
export class SearchInputComponent  {
  placeholder = input('Buscar por ...');
  debounceTime = input(300);
  buscar = output<string>();

  inputValue = signal('');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();  // Esta es la señal que se esta observando 
    const timeout = setTimeout(() => { // Retarda la emision del valor hasta que dejempos de 
      this.buscar.emit(value);
    }, this.debounceTime());

    onCleanup(() => clearTimeout(timeout)); // Limpia el timeout para evitar emisiones duplicadas

  });

}
