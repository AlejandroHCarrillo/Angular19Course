import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;
  

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Resident evil', [Validators.required, Validators.minLength(4)]],
      ['Mario Kart', [Validators.required, Validators.minLength(2)]]
    ], Validators.minLength(3))
  });

  newFavorite = new FormControl('', [Validators.required, Validators.minLength(2)]); // control independiente para agregar un control al formulario pricipal

  get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onAddToFavorites(){
    // console.log("agregando a favoritos");
    // console.log('is valid?' , !this.newFavorite.invalid);
    // console.log('errors?' , this.newFavorite.errors );
    
    if(this.newFavorite.invalid) return;

    const newGame = this.newFavorite.value;
    
    console.log({newGame});
    
    // agregamos el nuevo juego a arreglo de juegos favoritos
    this.favoriteGames.push(this.fb.control(newGame, [Validators.required, Validators.minLength(2) ] ) );

    // Limpiamos el texto del input para agregar favoritos
    this.newFavorite.reset();

  }

  onDeleteFavorite(index: number){
    this.favoriteGames.removeAt(index);
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const fg = this.myForm.controls['favoriteGames'] as FormArray;
    if(fg.controls.length === 0 ) {
      // agregamos el nuevo juego a arreglo de juegos favoritos
      const newGame = this.newFavorite.value;
      this.favoriteGames.push(this.fb.control(newGame, [Validators.required, Validators.minLength(2) ] ) );      
      return;
    }
    
    console.log('Formulario enviado', this.myForm.value);
    // console.log(fg.controls.length);

    this.myForm.reset({ name: '', price: 0, inStorage: 0 });
    this.myForm.controls['favoriteGames'].reset();

    this.favoriteGames.clear();
  }
 }
