import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {
    
  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    const isTouched = form.controls[fieldName].touched;
    const hasErrors = !!form.controls[fieldName].errors;

    return !(isTouched && hasErrors);
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors;
    if (errors) {
        return this.getErrorDescription(errors);
    }
    return null;
  }

  static isValidFieldInArray(formArray: FormArray, index : number){
    return !( formArray.controls[index].errors && formArray.controls[index].touched ); 
  }     

  static getFieldErrorInArray(FormArray: FormArray, index: number): string | null {
    if (FormArray.controls.length === 0) return null;

    const errors = FormArray.controls[index].errors;

    if (errors) {
        return this.getErrorDescription(errors);
    }
    return null;
  }

  private static getErrorDescription(errors: ValidationErrors): string | null{
    // console.log(errors);
    // for (const error in errors) {
    //     if (errors['required']) {
    //       return 'Este campo es obligatorio.';
    //     }
    //     if (errors['minlength']) {
    //       return `Este campo debe tener al menos ${errors['minlength'].requiredLength} caracteres.`;
    //     }
    //     if (errors['min']) {
    //       return `Este campo debe ser mayor o igual a  ${errors['min'].min}.`;
    //     }
    //   }
    // Usando switch y recorriendo las llaves del objeto Object.keys
    for (const key of Object.keys(errors)) {
        switch(key){
            case 'required': 
                return 'Este campo es obligatorio.';
            case 'minlength': 
                return `Este campo debe tener al menos ${errors['minlength'].requiredLength} caracteres.`;
            case 'min':  
                return `Este campo debe ser mayor o igual a  ${errors['min'].min}.`;
        }
    } 
    return null;
  }
}
