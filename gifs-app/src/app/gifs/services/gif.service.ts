import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mappers/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const GIF_HISTORY_KEY = 'History';
const loadFromLocalStorage = () => {
  const items = localStorage.getItem(GIF_HISTORY_KEY);
  return items ? JSON.parse(items): {};
}


@Injectable({ providedIn: 'root'})
export class GifService {
private http = inject(HttpClient);

trendingGifs = signal<Gif[]>([]);
trendingGifLoading = signal(true);

searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
searchHistoryKeys = computed<string[]>(() => Object.keys(this.searchHistory()));

    constructor(){
        this.loadTrendingGifs();
        console.log('Servicio Creado');
        
    }

    loadTrendingGifs(){
        this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`, {
        params: {   api_key: environment.giphyApiKey,
                    limit: 25,
                    offset: 0
                }
        }).subscribe((resp)=>{
            console.log({resp});
           const gifs = GifMapper.mapGiphyItemsToGifsArray(resp.data );
           console.log({gifs});           
           this.trendingGifs.set(gifs);
           this.trendingGifLoading.set(false);
           return gifs;
        });
    }

    searchGifs(query:string = ''): Observable<Gif[]> {
        return this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/search`, {
        params: {   api_key: environment.giphyApiKey,
                    limit: 25,
                    offset: 0,
                    q: query
                }
        }).pipe(
            map(({data}) => {
                const gifs = GifMapper.mapGiphyItemsToGifsArray(data);
                return gifs;
            }),
            tap((gifs) => {
                this.searchHistory.update((currentHistory) => ({
                    ...currentHistory,
                    [query.toLocaleLowerCase()]: gifs
                }));
            })
        );
    }

    getHistoryGifs(query: string): Gif[] {
        return this.searchHistory()[query] ?? [];
    }

    saveGifsToLocalStorage = effect(()=>{
    localStorage.setItem(GIF_HISTORY_KEY, JSON.stringify(this.searchHistory()) );
  });
}

        //    this.trendingGifs.set(gifs);
        //    this.trendingGifLoading.set(false);
        //    return gifs;
        // });
//     }       
// }
