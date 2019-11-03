import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormUtil {
    // Recebe uma data no formato de string e verifica se o valor é maior que uma segunda data no formato de string
    static dataInicioMaiorQueFinal(dataInicio: string): ValidatorFn {
        // recebe um controle do formulário como parâmetro, neste caso a data final e devolve um erro ou null
        return (controlNameDataFinal: AbstractControl): ValidationErrors | null => {
            // se dataInicio maior que dataFinal retorna um obj nessa estrutura { dataInicioMaiorQueFinal: true } caso contrário null
            // tslint:disable-next-line: max-line-length
            // return DateValidator.strToDate(dataInicio) > DateValidator.strToDate(controlNameDataFinal.value) ? { dataInicioMaiorQueFinal: true } : null;
            let inicio = new Date(dataInicio).toLocaleDateString('zh-TW');
            let final = new Date(controlNameDataFinal.value).toLocaleDateString('zh-TW');
            return inicio > final ? { dataInicioMaiorQueFinal: true } : null;
        };
    }

    // static intervaloMaiorQueTresMeses(dataInicio: String): ValidatorFn {
    //     return (control: AbstractControl): ValidationErrors | null => {
    //         let dataFinal: string = control.value;
    //         let dataInicioDate = DateValidator.strToDate(dataInicio);
    //         let dataFinalDate = DateValidator.strToDate(dataFinal);

    //         if (dataInicioDate && dataFinalDate) {
    //             const utc1 = Date.UTC(dataInicioDate.getFullYear(), dataInicioDate.getMonth(), dataInicioDate.getDate());
    //             const utc2 = Date.UTC(dataFinalDate.getFullYear(), dataFinalDate.getMonth(), dataFinalDate.getDate());
    //             const diferencaDatas = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
    //             return diferencaDatas > 90 ? { intervaloMaiorQueTresMeses: true } : null;
    //         }
    //     };
    // }

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
