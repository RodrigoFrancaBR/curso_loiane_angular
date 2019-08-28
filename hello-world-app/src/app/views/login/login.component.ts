import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { LoginDTO } from 'src/app/dto/login-dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public loginDTO: LoginDTO, private service: LoginService) { }
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

  logar() {
    this.service.findUser().subscribe((rs => {
      // tslint:disable-next-line:prefer-const
      let user = rs;
    }));
  }

  forgot() {
    this.service.updateUser(this.loginDTO.form.value).subscribe((rs => {
      console.log(rs);
    }));
  }

  register() {
    this.service.addUser(this.loginDTO.form.value).subscribe((rs => {
      console.log(rs);
    }));
  }

  delete() {
    this.service.deleteUser(this.loginDTO.form.value).subscribe((rs => {
      console.log(rs);
    }));
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
