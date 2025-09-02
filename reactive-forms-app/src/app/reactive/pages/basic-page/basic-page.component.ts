import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {
  // myForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   price: new FormControl(0, [Validators.required, Validators.min(0)]),
  //   storage: new FormControl(0, [Validators.required, Validators.min(0)])
  // });

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]], //this.fb.control('', Validators.required),
    price: [0, [Validators.required, Validators.min(10)]], //this.fb.control(0, [Validators.required, Validators.min(0)]),
    inStorage: [0, [Validators.required, Validators.min(0)]], //this.fb.control(0, [Validators.required, Validators.min(0)])
  });

  // isValidField(fieldName: string): boolean | null {
  //   const istouched = this.myForm.controls[fieldName].touched;
  //   const hasErrors = !!this.myForm.controls[fieldName].errors;
  //   // console.log(fieldName, "touched? ", istouched, "hasErrors?", hasErrors);

  //   return !(istouched && hasErrors);

  // }

  // getFieldError(fieldName: string): string | null {
  //   console.log(fieldName);
  //   const errors = this.myForm.controls[fieldName].errors;
  //   console.log(errors);
  //   if (errors) {
  //     for (const error in errors) {        
  //       if (errors['required']) {
  //         console.log('Este campo es obligatorio');
  //         return 'Este campo es obligatorio';
  //       }
  //       if (errors['minlength']) {
  //         console.log(`Este campo debe tener al menos ${errors['minlength'].requiredLength} caracteres`);
  //         return `Este campo debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
  //       }
  //       if (errors['min']) {
  //         console.log('Este campo debe ser mayor o igual a ' + errors['min'].min);
  //         return 'Este campo debe ser mayor o igual a ' + errors['min'].min;
  //       }
  //     }
  //   }
  //   return null;
  // }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log('Formulario enviado', this.myForm.value);

    this.myForm.reset({ name: '', price: 0, inStorage: 0 });
  }
}
