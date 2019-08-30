import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-grid-usuarios',
  templateUrl: './grid-usuarios.component.html',
  styleUrls: ['./grid-usuarios.component.css']
})
export class GridUsuariosComponent implements OnInit {
  users: any;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.users = this.service.buscarTodos().subscribe((rs) => {

    });
  }

  // submit() {
  //   this.service.pesquisar(this.id.value).subscribe(
  //     success => console.log('sucesso'),
  //     error => console.log(error),
  //     () => console.log('request complete')
  //   );
  // }

}
