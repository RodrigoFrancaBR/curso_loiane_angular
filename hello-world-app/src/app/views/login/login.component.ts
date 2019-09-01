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
  // retorno$: Observable<LoginDTO[]>;
  // retorno: LoginDTO[];
  retorno: string[];

  ngOnInit() {
    // this.service.users().subscribe((rs) => {
    //   this.retorno = rs;
    // });
    this.service.resource().subscribe((rs) => {
      console.log (rs);
      // this.retorno = rs;
    });
    console.log(this.retorno);
    // this.retorno$ = this.service.users();
    // console.log(this.retorno$);
  }

  onSubmit() {
    console.log(this.loginDTO.form);
    // this.service.usersAdd(this.loginDTO.form.value).subscribe(rs => console.log());
    // console.log(this.service.users().subscribe(rs => console.log(rs)));
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
