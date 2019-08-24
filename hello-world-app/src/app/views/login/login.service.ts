import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {
  }

  users() {
    return this.httpClient.get(this.API);
  }
}
