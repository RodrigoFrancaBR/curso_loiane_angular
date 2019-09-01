import { FormBuilder, Validators } from '@angular/forms';

import { ValidatorsUtil } from '../commons/custom-validators/validators-util';

export class UserDTO {
    static form: any;
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

    form = this.fb.group({
        userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10), ValidatorsUtil.validaName]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    });
}
