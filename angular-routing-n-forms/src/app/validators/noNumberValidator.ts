import { AbstractControl, ValidationErrors } from "@angular/forms";

export function noNumbers(control: AbstractControl): ValidationErrors | null {
    const hasNumber = /\d/.test(control.value);

    return hasNumber ? {'noNumbers': true} : null;
}