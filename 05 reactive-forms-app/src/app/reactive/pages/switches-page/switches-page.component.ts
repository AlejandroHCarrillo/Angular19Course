import { FormUtils } from '../../../utils/form-utils';
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'switches-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent {
  private fb = inject(FormBuilder);

  formUtils = FormUtils; 

  myForm : FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNothifications: [true],
    termsAndConditions: [false, Validators.requiredTrue],
  }) 

  onSubmit() {
    this.myForm.markAllAsTouched();

    console.log("Enviando formulario", this.myForm.value);
    
  // throw new Error('Method not implemented.');
} 

}
