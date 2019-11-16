import { ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FormMensagemError {
    private static readonly errorMessages = {
        required: () => 'Campo com preenchimento obrigatório!',
        date: () => 'Data no formato inválido.',
        intervaloMaiorQueTresMeses: () => 'As datas informadas não podem ultrapassar o período de três meses.',
        dataInicioMaiorQueFinal: () => 'Data inicio não pode ser maior que a data final.',
    };

    getErrors(errors): string[] {
        return Object.keys(errors)
            .map(error => this.getMessage(error, errors[error]));
    }

    private getMessage(nomeError: string, objetoErro: ValidationErrors) {
        return FormMensagemError.errorMessages[nomeError](objetoErro);
    }
}
