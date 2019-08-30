import { Component, OnInit } from '@angular/core';

import { UserDTO } from './../../dto/user-dto';
import { UserService } from './user.service';
import { BaseFormComponent } from 'src/app/base-form/base-form.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

  novo() {
    console.log('novo');
  }
}
