import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {
  constructor() { }

  public minimumAgeValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      var today = new Date();
      var dateOfBirth = new Date(control.value);
      var diffMilliSeconds = Math.abs(today.getTime() - dateOfBirth.getTime());
      var diffYears = (diffMilliSeconds / (1000 * 60 * 60 * 24)) / 365.25;

      if (diffYears >= minAge) {
        return null;
      }
      else {
        return { minAge: { valid: false } };
      }
    };
  }

  public compareValidator(controlToValidate: string, controlToCompare: string): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
      if (!formGroup.get(controlToValidate).value) {
        return null;
      }

      if (formGroup.get(controlToValidate).value == formGroup.get(controlToCompare).value) {
        return null;
      }
      else {
        formGroup.get(controlToValidate).setErrors( { compareValidator: { valid: false }});
        return { compareValidator: { valid: false } };
      }
    };
  }
}


