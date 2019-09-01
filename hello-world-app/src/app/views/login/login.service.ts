import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { LoginDTO } from './../../dto/login-dto';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  // private readonly API = 'http://localhost:3000/users';
 //  private readonly API = '/api/myapp/myresource';

  constructor(private httpClient: HttpClient) {
  }

  // users(): Observable<LoginDTO[]> {
  //   return this.httpClient.get<LoginDTO[]>(this.API);
  // }

  resource(): Observable<any[]> {
    return this.httpClient.get<any[]>('api/myresource:');
  }

  // usersAdd(loginDTO: LoginDTO): Observable<any> {
  //   return this.httpClient.post(this.API, loginDTO);
  // }
}

