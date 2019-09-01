import { UserDTO } from './../../../dto/user-dto';
import { UsersService } from './../users.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-users',
  templateUrl: './grid-users.component.html',
  styleUrls: ['./grid-users.component.css']
})
export class GridUsersComponent implements OnInit {

  @Input()
  listaDeUsuarios: UserDTO[] = [];

  @Output()
  executarListarTodos = new EventEmitter();


  constructor(private service: UsersService) { }

  ngOnInit() {
    console.log(this.listaDeUsuarios);
    this.executarListarTodos.emit();
  }
}
