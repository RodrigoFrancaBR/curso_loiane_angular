import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UsersService } from './../users.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-grid-users',
  templateUrl: './grid-users.component.html',
  styleUrls: ['./grid-users.component.css']
})

export class GridUsersComponent implements OnInit {

  @Input()
  listaDeUsuarios: User[];

  @Output()
  executarListarTodos = new EventEmitter();


  constructor(private service: UsersService) { }

  ngOnInit() {
    // console.log(this.listaDeUsuarios);
    // this.executarListarTodos.emit();
  }
}
