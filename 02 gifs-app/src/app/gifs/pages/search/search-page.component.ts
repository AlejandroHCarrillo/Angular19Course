import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  gifs = signal<Gif[]>([]);   
  gifService = inject(GifService);
  onSearch(query: string) {
    // Lógica para realizar la búsqueda de gifs
    console.log({query});
    this.gifService.searchGifs(query).subscribe(resp => {
      this.gifs.set(resp);
    });
  }
}
