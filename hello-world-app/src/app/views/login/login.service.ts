import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { LoginDTO } from 'src/app/dto/login-dto';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private readonly API = '/api/users';
  // private readonly API = 'http://localhost:8080/user';
  // private readonly API = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {
  }

  registrar(loginDTO: LoginDTO): Observable<any> {
    return this.httpClient.post(this.API, loginDTO.form.value);
  }

  efetuarLogin(loginDTO: LoginDTO): Observable<any> {
    return this.httpClient.post(this.API, loginDTO);
  }

  recuperarSenha(loginDTO: LoginDTO): Observable<any> {
    return this.httpClient.get(this.API);
  }

  remover(loginDTO: LoginDTO): Observable<any> {
    return this.httpClient.delete(this.API);
  }

  users(): Observable<any> {
    return this.httpClient.get(this.API);
  }

  // users(): Observable<LoginDTO[]> {
  //   return this.httpClient.get<LoginDTO[]>(this.API);
  // }

}

