import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../Interfaces/hero.interface';

@Pipe({
  name: 'heroTextColor'
})
export class HeroTextColorPipe implements PipeTransform {

  transform(value: Color): string {
    // console.log(ColorMap[value]);
    return value in Color ? ColorMap[value] : 'unknown';
  }

}
