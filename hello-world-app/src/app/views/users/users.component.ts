import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';
import { UsuarioDTO } from "./../../dto/UsuarioDTO";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  listaDeUsuarios: UsuarioDTO[] = [];

  constructor(
    private service: UsersService,
  ) { }

  ngOnInit() {
  }

  executarListarTodos(): void {
    this.service.buscarTodos().subscribe((rs) => {
      this.listaDeUsuarios = [];
      this.listaDeUsuarios = rs;
    },
      (error) => {
        console.log(error);
        this.listaDeUsuarios = [];
      },
      () => console.log('request complete')
    );
  }

  executarPesquisa(id: number): void {
    this.service.pesquisar(id).subscribe((rs) => {
      this.listaDeUsuarios = [];
      this.listaDeUsuarios.push(rs);
    },
      (error) => {
        console.log(error);
        this.listaDeUsuarios = [];
      },
      () => console.log('request complete')
    );
  }

  executarCadastro(usuarioDTO: UsuarioDTO) {
    console.log('cadastrando');
  }

  novo() {
    console.log('novo');
  }

}
