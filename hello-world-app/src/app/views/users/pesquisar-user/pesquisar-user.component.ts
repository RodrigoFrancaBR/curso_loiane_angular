import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FormUtil } from 'src/app/util/form-util';

@Component({
  selector: 'app-pesquisar-user',
  templateUrl: './pesquisar-user.component.html',
  styleUrls: ['./pesquisar-user.component.css']
})

export class PesquisarUserComponent implements OnInit {

  constructor(
    private fb: FormBuilder) {
  }

  get id() {
    return this.formulario.get('id');
  }

  @Output()
  executarPesquisa = new EventEmitter();

  @Output()
  executarLimpeza = new EventEmitter();

  formulario = this.fb.group({
    id: ['', [Validators.required]]
  });

  ngOnInit() {
  }

  onSubmit() {
    this.formulario.valid ? this.pesquisarUser(this.id.value) : FormUtil.markAllControlAsDirty(this.formulario);
  }

  limpar() {
    console.log('limpar');
    this.formulario.reset();
    this.executarLimpeza.emit();
  }

  // metodos com as regras de negócio
  pesquisarUser(id: number) {
    this.executarPesquisa.emit(id);
  }

  aplicarCSSErro(controlName: string) {
    return FormUtil.aplicarCSSErro(this.formulario, controlName);
  }

  mostrarErro(controlName: string) {
    return FormUtil.mostrarErro(this.formulario, controlName);
  }
}
