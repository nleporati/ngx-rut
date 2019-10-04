import { Directive } from "@angular/core";
import {
  NG_VALIDATORS,
  FormControl,
  AbstractControl,
  ValidationErrors,
  Validator
} from "@angular/forms";
import { rutValidate } from "rut-helpers";

function validate(rut): ValidationErrors | null {
  return rutValidate(rut) ? null : { invalidRut: true };
}

@Directive({
  selector:
    "[rutValidate][ngModel],[rutValidate][formControl],[rutValidate][formControlName]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: RutValidator, multi: true }
  ]
})
export class RutValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return validate(control.value);
  }
}

export function rutValidator(control: FormControl): ValidationErrors | null {
  return validate(control.value);
}
