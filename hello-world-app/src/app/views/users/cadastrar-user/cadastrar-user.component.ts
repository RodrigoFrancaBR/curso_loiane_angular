import { ValidatorsUtil } from './../../../commons/custom-validators/validators-util';
import { UsuarioDTO } from "./../../../dto/UsuarioDTO";
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UsersService } from '../users.service';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { FormUtil } from 'src/app/commons/util/form-util';

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
    public usuarioDTO: UsuarioDTO,
    private service: UsersService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.formulario.valid ? this.cadastrarUser(this.formulario.value) : FormUtil.markAllControlAsDirty(this.formulario);
  }

  // metodos com as regras de negócio
  cadastrarUser(usuarioDTO: UsuarioDTO) {
    this.executarCadastro.emit(usuarioDTO);
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
