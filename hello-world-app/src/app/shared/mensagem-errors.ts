import { ValidationErrors } from '@angular/forms';

export class MensagemErrors {
    public static REQUIRED = 'Campo com preenchimento obrigatório!';
    public static EMAIL = 'Email inválido!';
    public static INVALIDNAME = 'nome inválido!';

    public static minlength(errors: ValidationErrors): string {
        const min: string = errors.minlength.requiredLength;
        const actual: string = errors.minlength.actualLength;
        const resultado: string = 'Você preencheu, ' + actual + ' dos ' + min + ' campos obrigatórios!';
        return resultado;
    }
}



