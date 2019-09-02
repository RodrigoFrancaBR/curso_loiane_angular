import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';
import { UsuarioDTO } from 'src/app/dto/usuario-dto';

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
    // agendar() {
    //   this.estadoTela.estadoTela = 'agendar';
    //   const estadoTela = JSON.stringify(this.estadoTela);
    //   const nav: NavigationExtras = {
    //     queryParams: {
    //       'estadoTela': estadoTela,
    //     },
    //     skipLocationChange: true
    //   };
    //   this.router.navigate(['cobranca/pesquisa-aviso-debito/dados-agendamento'], nav);
    // }
  }

}
