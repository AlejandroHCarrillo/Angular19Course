import { FormGroup } from "@angular/forms";

export class FormUtils {
    
  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    const isTouched = form.controls[fieldName].touched;
    const hasErrors = !!form.controls[fieldName].errors;

    return !(isTouched && hasErrors);
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    const errors = form.controls[fieldName].errors;
    if (errors) {
      for (const error in errors) {
        if (errors['required']) {
          return 'Este campo es obligatorio';
        }
        if (errors['minlength']) {
          return `Este campo debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
        }
        if (errors['min']) {
          return 'Este campo debe ser mayor o igual a ' + errors['min'].min;
        }
      }
    }
    return null;
  }
}
