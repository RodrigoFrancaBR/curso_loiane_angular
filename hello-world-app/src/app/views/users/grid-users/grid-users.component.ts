import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UsersService } from './../users.service';
import { UsuarioDTO } from 'src/app/dto/usuario-dto';

@Component({
  selector: 'app-grid-users',
  templateUrl: './grid-users.component.html',
  styleUrls: ['./grid-users.component.css']
})

export class GridUsersComponent implements OnInit {

  @Input()
  listaDeUsuarios: UsuarioDTO[] = [];

  @Output()
  executarListarTodos = new EventEmitter();


  constructor(private service: UsersService) { }

  ngOnInit() {
    console.log(this.listaDeUsuarios);
    this.executarListarTodos.emit();
  }
}
