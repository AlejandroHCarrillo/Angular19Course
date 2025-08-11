import { NgClass } from '@angular/common';
import { Component, computed, signal, Type  } from '@angular/core';

interface Character{
  id:number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
  styles: ``
})

export class DragonballPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id:1, name:"Goku", power:9001},
    {id:2, name:"Vegetta", power:8002},
    {id:3, name:"Picolo", power:3003},
    {id:4, name:"Yamcha", power:300},
  ]);

// powerClass = computed(()=>{
//   return { 'text-danger': true }
// });

  addCharacter(){
    console.log('name', this.name(), 'power', this.power());
    if(!this.name() || !this.power() || this.power() <=0) return

      const newCharacter : Character = { id: this.characters.length + 1, 
                      name: this.name(), 
                      power: this.power() }

    // this.characters().push(newCharacter); // funciona pero no usar asi
    this.characters.update((list)=> [...list, newCharacter]);
    console.log(this.characters());   
    this.cleanfields(); 
  }

  cleanfields(){
    this.name.set('');
    this.power.set(0);
  }
}
