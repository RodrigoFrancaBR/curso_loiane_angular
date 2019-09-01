import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { LoginDTO } from 'src/app/dto/login-dto';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public loginDTO: LoginDTO, private service: LoginService) { }
<<<<<<< HEAD
  // retorno$: Observable<LoginDTO[]>;
  // retorno: LoginDTO[];
  retorno: string[];

  ngOnInit() {
    // this.service.users().subscribe((rs) => {
    //   this.retorno = rs;
    // });
    // this.service.resource().subscribe((rs) => {
    //   console.log (rs);
    //   // this.retorno = rs;
    // });
    console.log(this.retorno);
    // this.retorno$ = this.service.users();
    // console.log(this.retorno$);
  }

  onSubmit() {
    console.log(this.loginDTO.form);
    // this.service.usersAdd(this.loginDTO.form.value).subscribe(rs => console.log());
    // console.log(this.service.users().subscribe(rs => console.log(rs)));
=======
  retorno: LoginDTO[];

  ngOnInit() {
    this.service.users().subscribe((rs) => {
      console.log(rs);
    });
  }

  // ngOnInit() {
  //   this.service.users().subscribe((rs) => {
  //     this.retorno = rs;
  //   });
  //   console.log(this.retorno);
  //   // this.retorno$ = this.service.users();
  //   // console.log(this.retorno$);
  // }

  registrar() {
    // tslint:disable-next-line:prefer-const
    let retorno: LoginDTO;
    this.service.registrar(this.loginDTO).subscribe((rs => {
      console.log(rs);
      retorno = rs;
      if (retorno.id) {
        this.loginDTO.form.reset();
      } else {
        throwError('erro');
      }
    }));

  }

  efetuarLogin() {
    // tslint:disable-next-line:prefer-const
    let retorno: LoginDTO[];
    // tslint:disable-next-line:prefer-const
    let user: LoginDTO;
    this.service.users().subscribe((rs) => {
      retorno = rs;
      user = retorno.find(e => e.userName.value === this.loginDTO.userName.value);

      // retorno.find((e) => {
      //   // tslint:disable-next-line:no-unused-expression
      //   user = e.userName.value === this.loginDTO.userName.value;
      // });

    });
  }

  recuperarSenha() {
    // this.service.recuperarSenha(this.loginDTO).subscribe((rs => {
    //   // tslint:disable-next-line:prefer-const
    //   let user = rs;
    // }));
  }




  remover() {
    this.service.remover(this.loginDTO.form.value).subscribe((rs => {
      console.log(rs);
    }));
>>>>>>> 965a44c471c95211a23cc940aad7120ea6a42fdd
  }

  aplicarCSSErro(controlName: string) {
    return this.isValid(controlName) ? { 'is-invalid': true } : null;
    // return this.loginDTO.form.get(controlName).errors &&
    //   (this.loginDTO.form.get(controlName).touched ||
    //     this.loginDTO.form.get(controlName).dirty) ? { 'is-invalid': true } : null;
  }

  mostrarErro(controlName: string) {
    return this.isValid(controlName);
    // return this.loginDTO.form.get(controlName).errors &&
    //   (this.loginDTO.form.get(controlName).touched ||
    //     this.loginDTO.form.get(controlName).dirty) ? true : false;
  }

  // um campo é inválido qdo possui algum erro já estiver sido tocado ou ganho foco.
  isValid(controlName: string): boolean {
    return this.loginDTO.form.get(controlName).errors &&
      (this.loginDTO.form.get(controlName).touched ||
        this.loginDTO.form.get(controlName).dirty) ? true : false;
  }
}
