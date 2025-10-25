import { Component, computed, input, linkedSignal, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pagination',
  imports: [RouterLink],
  templateUrl: './pagination.component.html',
  styles: ``
})
export class PaginationComponent {
  pages = input(0);
  currentPage = input<number>(1);
  activePage = linkedSignal(this.currentPage);

  getPagesList = computed(() => {
    // Creamos una array de numeros dependiendo del numero de paginas de la señal
    // Usamos la funcion lamba (_, i) => i+1
    // Tomamos el valor (_) y el indice (i) como entrada
    // y regresamos el indice + 1
    return Array.from( {length: this.pages()}, (_, i) => i+1 );
  }) 
}
