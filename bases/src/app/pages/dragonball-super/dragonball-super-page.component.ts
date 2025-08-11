import { NgClass } from '@angular/common';
import { Component, computed, signal, Type  } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styles: ``
})

export class DragonballSuperPageComponent {
  // name = signal("");
  // power = signal(0);

  characters = signal<Character[]>([
    {id:1, name:"Goku", power:9001},
    {id:2, name:"Vegetta", power:8002},
  ]);

// powerClass = computed(()=>{
//   return { 'text-danger': true }
// });

  // updateName (value:string){
  //   this.name.set(value);
  // }

  addCaracter(character : Character){
        this.characters.update((list)=> [...list, character]);
  }


}
