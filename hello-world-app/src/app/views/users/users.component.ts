import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';
import { EstadoTela } from './../../dto/estado-tela';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  listaDeUsuarios: User[] = [];
  estadoTela: EstadoTela = new EstadoTela(status = 'buscar');
  constructor(
    private service: UsersService,

  ) { }

  ngOnInit() {
  }

  executarListarTodos(): void {
    console.log(this.estadoTela.status);
    this.listaDeUsuarios = [];
    this.service.buscarTodos().subscribe((rs) => {
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
    console.log(this.estadoTela.status);
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

  executarCadastro(user: User) {
    console.log(this.estadoTela.status);
    this.service.salvar(user).subscribe((rs) => {
      this.executarListarTodos();
      this.estadoTela.mudarParaBuscar();
    },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );
  }

  executarLimpeza() {
    console.log(this.estadoTela);
    this.listaDeUsuarios = [];
  }

  novo() {
    console.log(this.estadoTela);
    this.estadoTela.mudarParaSalvar();
  }

  buscarTodos() {
    console.log(this.estadoTela);
    if (!this.estadoTela.isBuscar()) {
      this.estadoTela.mudarParaBuscar();
    }
    this.executarListarTodos();
  }

}
