import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { SiNoPipe } from '../../pipes/si-no.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../Interfaces/hero.interface';
import { HeroFilterByPipe } from '../../pipes/hero-filter-by.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, SiNoPipe, HeroColorPipe, UpperCasePipe, HeroTextColorPipe, HeroCreatorPipe, 
            HeroSortByPipe, NgIf, TitleCasePipe, HeroFilterByPipe],
  templateUrl: './custom-page.component.html',
  styles: ``
})
export default class CustomPageComponent {
  stringToToggle = 'Hola Mundo';
  isUpperCase = signal(true);
  sortBy = signal<keyof Hero|null>(null);
  filterBy = signal<keyof Hero|null>('creator');
  querySearch = signal('');

  toggleCase() {
    this.isUpperCase.set(!this.isUpperCase());
  }

  heroes = signal(heroes);


}
