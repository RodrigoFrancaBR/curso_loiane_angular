import { ValidatorsUtil } from './../custom-validators/validators-util';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class LoginDTO {

    constructor(private fb?: FormBuilder) {
    }

    get userName() {
        return this.form.get('userName');
    }

    get password() {
        return this.form.get('password');
    }

    form = this.fb.group({
        userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10), ValidatorsUtil.validaName]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    });
}


