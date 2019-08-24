import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginDTO } from 'src/app/dto/login-dto';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private readonly API = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {
  }

  users() {
    return this.httpClient.get<LoginDTO[]>(this.API)
    .pipe(
      tap(console.log)
    )
    ;
  }
}

