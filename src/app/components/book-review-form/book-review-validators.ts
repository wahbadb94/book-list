import { AbstractControl, ValidatorFn } from '@angular/forms';

export function RatingValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const invalid = control.value < 1 || control.value > 5;

    if (invalid) {
      console.log('invalid');
    } else {
      console.log('valid');
    }

    return invalid ? { invalidRating: { value: control.value } } : null;
  };
}
