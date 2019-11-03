import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UsersService } from '../users.service';
import { FormUtil } from 'src/app/util/form-util';
import { User } from 'src/app/interfaces/user';
import { ValidatorsUtil } from 'src/app/util/validators-util';

@Component({
  selector: 'app-cadastrar-user',
  templateUrl: './cadastrar-user.component.html',
  styleUrls: ['./cadastrar-user.component.css']
})
export class CadastrarUserComponent implements OnInit {

  @Output()
  executarCadastro = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private service: UsersService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.formulario.valid ? this.cadastrarUser(this.formulario.value) : FormUtil.marcaComoDirtyOsControles(this.formulario);
  }

  // metodos com as regras de negócio
  cadastrarUser(user: User) {
    this.executarCadastro.emit(user);
  }

  aplicarCSSErro(controlName: string) {
    return FormUtil.aplicarCSSErro(this.formulario, controlName);
  }

  mostrarErro(controlName: string) {
    return FormUtil.mostrarErro(this.formulario, controlName);
  }

  // tslint:disable-next-line: member-ordering
  formulario = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10), ValidatorsUtil.validaName]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    confirmaPassword: ['', [Validators.minLength(6), Validators.maxLength(10)]],
  });


  get id() {
    return this.id;
  }

  get userName() {
    return this.formulario.get('userName');
  }

  get password() {
    return this.formulario.get('password');
  }

  get confirmaPassword() {
    return this.formulario.get('confirmaPassword');
  }

}
