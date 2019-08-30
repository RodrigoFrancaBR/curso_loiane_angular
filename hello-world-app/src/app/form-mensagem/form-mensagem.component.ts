import { ValidatorFn, ValidationErrors } from '@angular/forms';
import { Component, Input } from '@angular/core';

import { MensagemErrors } from '../mensagem-errors/mensagem-errors';

@Component({
  selector: 'app-form-mensagem',
  templateUrl: './form-mensagem.component.html',
  styleUrls: ['./form-mensagem.component.css']
})
export class FormMensagemComponent {

  @Input()
  mostraErro = true;

  msg: string;

  // tslint:disable-next-line: variable-name
  _errors: ValidatorFn;

  @Input()
  get errors(): ValidationErrors {
    return this._errors;
  }

  set errors(errors: ValidationErrors) {
    // se o campo tiver algum erro
    if (errors) {
      if (errors.required) {
        this.msg = MensagemErrors.REQUIRED;
      } else if (errors.email) {
        this.msg = MensagemErrors.EMAIL;
      } else if (errors.minlength) {
        // neste caso queremos mostrar uma msg personalizada
        this.msg = MensagemErrors.minlength(errors);
      } else if (errors.invalidName) {
        this.msg = MensagemErrors.INVALIDNAME;
      }
    } else {
      this.msg = null;
    }
  }

  constructor() { }

}
