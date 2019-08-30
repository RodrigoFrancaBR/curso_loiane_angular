import { BaseFormComponent } from 'src/app/base-form/base-form.component';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/dto/user-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent extends BaseFormComponent implements OnInit {


  constructor(
    public userDTO: UserDTO,
    private service: UserService) {
    super();
    this.formulario = userDTO.form;
  }

  ngOnInit() {
    // this.service.buscarTodos().subscribe((rs) => {
    //   console.log(rs);
    // });
  }

  salvar() {
    console.log('salvando');
    console.log(this.userDTO.form);
    this.service.salvar(this.userDTO.form.value).subscribe(
      success => console.log('sucesso'),
      error => console.log(error),
      () => console.log('request complete')
    );
  }

  // aplicarCSSErro(controlName: string) {
  //   return this.isValid(controlName) ? { 'is-invalid': true } : null;
  // }

  // mostrarErro(controlName: string) {
  //   return this.isValid(controlName);
  // }

  // // um campo é inválido qdo possui algum erro já estiver sido tocado ou ganho foco.
  // isValid(controlName: string): boolean {
  //   return this.userDTO.form.get(controlName).errors &&
  //     (this.userDTO.form.get(controlName).touched ||
  //       this.userDTO.form.get(controlName).dirty) ? true : false;
  // }

  submit() {
    this.service.salvar(this.userDTO.form.value).subscribe(
      success => console.log('sucesso'),
      error => console.log(error),
      () => console.log('request complete')
    );
  }

}
