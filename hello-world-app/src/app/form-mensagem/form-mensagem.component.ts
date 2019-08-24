import { MensagemErrors } from './../shared/mensagem-errors';
import { ValidatorFn, ValidationErrors, AbstractControl, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-mensagem',
  templateUrl: './form-mensagem.component.html',
  styleUrls: ['./form-mensagem.component.css']
})
export class FormMensagemComponent implements OnInit {

  @Input()
  mostraErro = true;

  msg: string;

  _errors: ValidatorFn;

  @Input()
  get errors(): ValidationErrors {
    return this._errors;
  }

  set errors(errors: ValidationErrors) {
    if (errors) {
      if (errors.required) {
        this.msg = MensagemErrors.REQUIRED;
      } else if (errors.email) {
        this.msg = MensagemErrors.EMAIL;
      } else if (errors.minlength) {
        console.log (errors.minlength.requiredLength);
        this.msg = MensagemErrors.MINLENGTH + errors.minlength.requiredLength;
      } else if (errors.invalidName) {
        this.msg = MensagemErrors.INVALIDNAME;
      }
    } else {
      this.msg = null;
    }
  }



  // tslint:disable-next-line: variable-name
  private _control: FormControl;

  @Input()
  public get control(): FormControl {
    return this._control;
  }

  public set control(control: FormControl) {
    console.log(control);
    if (control.errors && (control.touched || control.dirty)) {
      console.log(control);
      this.mostraErro = true;

      if (control.errors.required) {
        this.msg = MensagemErrors.REQUIRED;
      }

      this._control = control;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
