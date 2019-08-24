import { Component, OnInit } from '@angular/core';
import { LoginDTO } from 'src/app/dto/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginDTO: LoginDTO) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log (this.loginDTO.form);
  }
}
