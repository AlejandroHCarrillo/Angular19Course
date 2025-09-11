import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { map, Observable } from 'rxjs';
import { GifService } from '../../services/gif.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html'
})
export default class GifHistoryComponent {
  gifService = inject(GifService);

  query = toSignal(inject(ActivatedRoute).params
  .pipe(
    map((params: Params) => params['query'])
  ));
  
  gifsByKey = computed(() => {
    const query = this.query();
    return this.gifService.getHistoryGifs(query);
  });


}

