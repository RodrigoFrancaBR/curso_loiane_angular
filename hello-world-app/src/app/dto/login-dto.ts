import { ValidatorsUtil } from '../commons/custom-validators/validators-util';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class LoginDTO {

    constructor(private fb?: FormBuilder) {
    }

    // tslint:disable-next-line:variable-name
    private _id: number;

    get id() {
        return this.id;
    }

    get userName() {
        return this.form.get('userName');
    }

    get password() {
        return this.form.get('password');
    }

    get confirmaPassword() {
        return this.form.get('confirmaPassword');
    }

    form = this.fb.group({
        userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10), ValidatorsUtil.validaName]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
        confirmaPassword: ['', [Validators.minLength(6), Validators.maxLength(10)]],
    });
}


