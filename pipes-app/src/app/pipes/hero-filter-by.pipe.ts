import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../Interfaces/hero.interface';

@Pipe({
  name: 'heroFilterBy'
})
export class HeroFilterByPipe implements PipeTransform {

  transform(value: Hero[], filterBy: keyof Hero | null, query: string): Hero[] {
    if (!query) return value;
    query = query.toLowerCase();
    console.log('HeroFilterByPipe: ',{ filterBy, query });

    return value.filter(hero => hero[filterBy!].toString().toLowerCase().includes(query));
  }
}
