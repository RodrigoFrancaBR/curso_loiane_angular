import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { UsuarioDTO } from './../../dto/usuario-dto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly API = '/api/users';
  constructor(private http: HttpClient) {
  }

  pesquisar(id: number): Observable<UsuarioDTO> {
    return this.http.get<UsuarioDTO>(this.API + '/' + id);
  }

  buscarTodos(): Observable<UsuarioDTO[]> {
    return this.http.get<UsuarioDTO[]>(this.API);
  }

  salvar(dto) {
    return this.http.post(this.API, dto);
  }


}
