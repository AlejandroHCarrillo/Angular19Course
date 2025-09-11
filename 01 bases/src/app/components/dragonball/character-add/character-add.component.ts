import { output, signal } from '@angular/core';
import { Component } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html'
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();
  // addCharacter() {
  //   console.log(this.name(), this.power);
    
  // }

  addCharacter(){
    console.log('name: ', this.name(), 'power: ', this.power());
    if(!this.name() || !this.power() || this.power() <=0) return

      const newCharacter : Character = { id: Math.floor(Math.random()*10000),//this.characters.length + 1, 
                      name: this.name(), 
                      power: this.power() }

    // this.characters().push(newCharacter); // funciona pero no usar asi
    // this.characters.update((list)=> [...list, newCharacter]);
    // console.log(this.characters());   
    this.newCharacter.emit(newCharacter);
    this.cleanfields(); 
  }

  cleanfields(){
    this.name.set('');
    this.power.set(0);
  }

}
