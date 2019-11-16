import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl, ValidationErrors, ValidatorFn, FormControl, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormUtil {
    // exemplo da loiane que não funciona para dois campos
    static valorInicialMaiorQueFinal(otherField: string) {
        const validator: ValidatorFn = (formControl: FormControl) => {

            if (otherField === null) {
                throw new Error('Campo não informado!');
            }

            //  valida se o formulário existe e seus campos
            if (!formControl.root || !(formControl.root as FormGroup).controls) {
                return null;
            }

            const field = (formControl.root as FormGroup).get(otherField);

            if (!field) {
                throw new Error('Campo informado inválido!');
            }

            return field.value > formControl.value ? { dataInicioMaiorQueFinal: true } : null;
        };
        return validator;
    }


    // Recebe uma data no formato de string e verifica se o valor é maior que uma segunda data no formato de string
    static dataInicioMaiorQueFinal(dataInicio: string): ValidatorFn {
        // recebe um controle do formulário como parâmetro, neste caso a data final e devolve um erro ou null
        return (controlNameDataFinal: AbstractControl): ValidationErrors | null => {
            // se dataInicio maior que dataFinal retorna um obj nessa estrutura
            // { dataInicioMaiorQueFinal: true } caso contrário null
            return dataInicio > controlNameDataFinal.value ? { dataInicioMaiorQueFinal: true } : null;
        };
    }

    static intervaloMaiorQueTresMeses(dataInicio: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const dataFinal: string = control.value;
            const dataInicioDate = new Date(dataInicio);
            const dataFinalDate = new Date(dataFinal);

            if (dataInicioDate && dataFinalDate) {
                const utc1 = Date.UTC(dataInicioDate.getFullYear(), dataInicioDate.getMonth(), dataInicioDate.getDate());
                const utc2 = Date.UTC(dataFinalDate.getFullYear(), dataFinalDate.getMonth(), dataFinalDate.getDate());
                const diferencaDatas = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
                return diferencaDatas > 90 ? { intervaloMaiorQueTresMeses: true } : null;
            }
        };
    }

    // marca todos os controles como dirty
    static marcaComoDirtyOsControles(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(campo => {
            const controle = formGroup.get(campo);
            controle.markAsDirty();
            if (controle instanceof FormGroup) {
                this.marcaComoDirtyOsControles(controle);
            }
        });
    }

    // marca todos os controles como pristine
    static marcaComoPristineOsControles(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(campo => {
            const controle = formGroup.get(campo);
            controle.markAsPristine();
            if (controle instanceof FormGroup) {
                this.marcaComoDirtyOsControles(controle);
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
        // return this.isValid(formGroup, controlName) ? { 'is-invalid': true } : null;
        return this.isValid(formGroup, controlName) ? { 'is-invalid': true } :
            formGroup.get(controlName).pristine ? null : { 'is-valid': true };
    }

    static mostrarErro(formGroup: FormGroup, controlName: string) {
        return this.isValid(formGroup, controlName);
    }

    static respondendoMudancasDoForm(valor: string, controle: AbstractControl): void {
        controle.setValidators(
            [
                Validators.required,
                FormUtil.dataInicioMaiorQueFinal(valor),
                FormUtil.intervaloMaiorQueTresMeses(valor)

            ]
        );
        // atualiza o controle com as novas validações
        controle.updateValueAndValidity();
    }
}
