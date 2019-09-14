import { AbstractControl, ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorsUtil {

    public static validaName(control: FormControl): ValidationErrors {
        const userName: string = control.value;
        return control.value && control.value !== '' && control.value === 'admin'
            ? { invalidName: true } :
            null;
    }
}
