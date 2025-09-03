import { AbstractControl, ValidationErrors } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';
import { ShowFormErrorTemplateComponent } from '../../../shared/components/show-form-error-template/show-form-error-template.component';

@Component({
  selector: 'register-page',
  imports: [ShowFormErrorTemplateComponent, JsonPipe, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  
  formUtils = FormUtils; 
  
  myForm : FormGroup = this.fb.group({
    fullname: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.formUtils.namePattern)]],
    email: ['', [Validators.required, , Validators.pattern(this.formUtils.emailPattern)]],
    username: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.formUtils.noSpacesPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required ]],
  }, {
    validators:[ this.formUtils.compareFormFields('password', 'password2')]
  }) 
  
  onSubmit() {
    this.myForm.markAllAsTouched();

    console.log(this.myForm.value);
    
     this.myForm.reset();
  }

  getPatternError(field: string): string {
    let error =  this.formUtils.getFieldError(this.myForm, field)
    if (field === 'fullname' && error?.includes('pattern') ) error = 'Debe poner nombre y apellido';
    if (field === 'email' && error?.includes('pattern') ) error = 'Este no parece un correo valido.';

    return `${error}` 
  }

 }
