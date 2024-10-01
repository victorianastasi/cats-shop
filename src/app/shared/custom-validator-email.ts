import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidatorCustom(
  formControl: AbstractControl
): ValidationErrors | null {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verifica que el valor sea un string y que no esté vacío
  if (
    typeof formControl.value === 'string' &&
    formControl.value.trim() !== ''
  ) {
    if (!emailRegex.test(formControl.value)) {
      console.log('custom validation: es invalido');

      return { invalidEmail: true };
    } else {
      return null; // Válido
    }
  }
  return null;
}
