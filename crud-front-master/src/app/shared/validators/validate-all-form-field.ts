import { FormGroup, FormControl, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

interface DateFormControlsValidade {
  startDateFormControl: AbstractControl;
  endDateFormControl: AbstractControl;
}
export class ValidateAllFormFields {

  validate(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validate(control);
      }
    });
  }
}