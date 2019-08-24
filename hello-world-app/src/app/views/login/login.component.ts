import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { LoginDTO } from 'src/app/dto/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginDTO: LoginDTO, private service: LoginService) { }
  retorno: LoginDTO;

  ngOnInit() {
    console.log(this.service.users);
    // tslint:disable-next-line: semicolon
    this.service.users().subscribe(console.log);
  }

  onSubmit() {
    console.log(this.loginDTO.form);
  }
}
