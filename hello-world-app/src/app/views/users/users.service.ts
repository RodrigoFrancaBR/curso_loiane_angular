import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsuarioDTO } from 'src/app/dto/usuario-dto';
import { User } from 'src/app/dto/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly API = '/api/users';
  constructor(private http: HttpClient) {
  }

  pesquisar(id: number): Observable<User> {
    return this.http.get<User>(this.API + '/' + id);
  }

  buscarTodos(): Observable<User[]> {
    console.log ('service');
    return this.http.get<User[]>(this.API);
  }

  salvar(dto: User): Observable<User> {
    return this.http.post<User>(this.API, dto);
  }


}
