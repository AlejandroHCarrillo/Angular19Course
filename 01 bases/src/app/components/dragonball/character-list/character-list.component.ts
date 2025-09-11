import type { Character } from '../../../interfaces/character.interface';
import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
  imports: [NgClass],
})
export class CharacterListComponent {
listName = input('');
characters = input.required<Character[]>();

}
