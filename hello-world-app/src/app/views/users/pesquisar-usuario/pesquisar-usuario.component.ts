import { BaseFormComponent } from 'src/app/base-form/base-form.component';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pesquisar-usuario',
  templateUrl: './pesquisar-usuario.component.html',
  styleUrls: ['./pesquisar-usuario.component.css']
})

export class PesquisarUsuarioComponent extends BaseFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: UserService) {
    super();
  }

  ngOnInit() {
  }

  submit() {
    this.service.pesquisar(this.id.value).subscribe(
      success => console.log('sucesso'),
      error => console.log(error),
      () => console.log('request complete')
    );
  }



  // tslint:disable-next-line:member-ordering
  formulario = this.fb.group({
    id: ['', [Validators.required]]
  });

  get id() {
    return this.formulario.get('id');
  }

}
