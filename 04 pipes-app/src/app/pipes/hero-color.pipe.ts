import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../Interfaces/hero.interface';

@Pipe({
  name: 'heroColor'
})
export class HeroColorPipe implements PipeTransform {

  transform(value: Color): string {
    return value in Color ? Color[value] : 'unknown';
  }

}
