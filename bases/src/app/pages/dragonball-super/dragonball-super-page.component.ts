import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styles: ``
})

export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);  
  // name = signal("");
  // power = signal(0);

}
