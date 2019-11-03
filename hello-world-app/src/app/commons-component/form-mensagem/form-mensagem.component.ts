import { ValidatorFn, ValidationErrors } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { FormMensagemError } from 'src/app/util/form-mensagem-error';

@Component({
  selector: 'app-form-mensagem',
  templateUrl: './form-mensagem.component.html',
  styleUrls: ['./form-mensagem.component.css']
})
export class FormMensagemComponent {

  @Input()
  mostraErro: boolean = false;

  @Input()
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
      const listaDeErros = this.msgError.getErrors(errors);
      this.msg = listaDeErros[0];
    } else {
      this.msg = null;
    }
  }

  constructor(private msgError: FormMensagemError) { }

}
