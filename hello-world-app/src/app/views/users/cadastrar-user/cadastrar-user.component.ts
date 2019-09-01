import { UserDTO } from './../../../dto/user-dto';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-cadastrar-user',
  templateUrl: './cadastrar-user.component.html',
  styleUrls: ['./cadastrar-user.component.css']
})
export class CadastrarUserComponent implements OnInit {

  constructor(
    public userDTO: UserDTO,
    private service: UsersService) {
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
