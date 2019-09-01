import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormUtil {

    // marca todos os controles como dirty
    static markAllControlAsDirty(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(campo => {
            const controle = formGroup.get(campo);
            controle.markAsDirty();
            if (controle instanceof FormGroup) {
                this.markAllControlAsDirty(controle);
            }
        });
    }

    // um campo é inválido qdo possui algum erro, e se tiver sido tocado ou ganho foco.
    static isValid(formGroup: FormGroup, controlName: string): boolean {
        return formGroup.get(controlName).errors &&
            (formGroup.get(controlName).touched ||
                formGroup.get(controlName).dirty) ? true : false;
    }

    static aplicarCSSErro(formGroup: FormGroup, controlName?: string) {
        return this.isValid(formGroup, controlName) ? { 'is-invalid': true } : null;
    }

    static mostrarErro(formGroup: FormGroup, controlName: string) {
        return this.isValid(formGroup, controlName);
    }
}
