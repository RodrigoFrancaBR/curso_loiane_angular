import { AbstractControl, ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorsUtil {

    public static validaName(control: FormControl): ValidationErrors {
        if (control.value && control.value !== '') {
            return 'admin' === control.value ? { invalidName: true } : null;
        }
        return null;
    }
}