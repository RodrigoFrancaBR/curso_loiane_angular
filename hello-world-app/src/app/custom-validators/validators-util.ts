import { AbstractControl, ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorsUtil {

    public static validaName(control: FormControl): ValidationErrors {
        if (control.value && control.value !== '') {
            // tslint:disable-next-line: no-unused-expression
            return 'admin' === control.value ? { invalidName: true } : null;
        }
        return null;
    }
}