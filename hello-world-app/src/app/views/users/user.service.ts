import { Injectable } from '@angular/core';
import { UserDTO } from 'src/app/dto/user-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = '/api/users';
  constructor(private http: HttpClient) {
  }

  pesquisar(id: any): Observable<any> {
    return this.http.get(this.API + '/' + id);
  }

  salvar(dto) {
    return this.http.post(this.API, dto);
  }

  buscarTodos(): Observable<any> {
    return this.http.get(this.API);
  }



}
