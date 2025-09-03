import { AbstractControl, FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {
  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static noSpacesPattern = '^[a-zA-Z0-9]+$';  

  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    const isTouched = form.controls[fieldName].touched;
    const hasErrors = !!form.controls[fieldName].errors;

    return !(isTouched && hasErrors);
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors;
    // console.log({errors});
    
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
    // console.log({errors});
    
    // Usando switch y recorriendo las llaves del objeto Object.keys
    for (const key of Object.keys(errors)) {
        switch(key){
            case 'required': 
                return 'Este campo es obligatorio.';
            case 'minlength': 
                return `Este campo debe tener al menos ${errors['minlength'].requiredLength} caracteres.`;
            case 'min':  
                return `Este campo debe ser mayor o igual a  ${errors['min'].min}.`;
            // case 'email':  
            //     return `Este no parece un correo valido.`;
            case 'pattern': 
              if(errors['pattern'].requiredPattern === FormUtils.emailPattern){
                return "Ponga un correo valido"
              }
              if(errors['pattern'].requiredPattern === FormUtils.namePattern){
                return "Ponga el nombre y el apellido"
              }           
            return `Error del pattern vs la expresion regular` 
            default: return `Error no controlado en ${ key }` 
        }
    } 
    return null;
  }

  static getFiedErrorDescription(errors: ValidationErrors | null ): string {

    if (errors!=null){
      return  this.getErrorDescription(errors) ?? '';
    }
    return "";
  }


  static compareFormFields(field1: string, field2: string) {
    // console.log({field1, field2});    
    return ((formGroup: AbstractControl) =>{
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;
      // console.log({fieldValue1, fieldValue2});
      return fieldValue1 === fieldValue2 ? null : { fieldsAreNotEquals : true } ;
    });
    // Aqui la logica debe de ser que los campos no sean iguales = true 
    // por que lo que estamos buscando es que cuando halla errores
    // se cree el objeto pero cuando sean iguales
    // regrese null, osea no hay errores
  }
}
