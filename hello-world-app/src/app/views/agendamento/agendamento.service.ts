import { HttpClient } from '@angular/common/http';
import { Agendamento } from './../../interfaces/agendamento';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private readonly API = 'api/agendamento';
  constructor(private http: HttpClient) {
  }

  salvar(filtro: Agendamento): Observable<any> {
    const filtroCodificado = btoa(JSON.stringify(filtro));
    console.log (filtroCodificado);
    return this.http.get<any>(this.API + '?filtro=' + filtroCodificado);
  }

}
