import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { FormMensagemComponent } from './commons/form-mensagem/form-mensagem.component';
import { UsersComponent } from './views/users/users.component';
import { PesquisarUserComponent } from './views/users/pesquisar-user/pesquisar-user.component';
import { GridUsersComponent } from './views/users/grid-users/grid-users.component';
import { CadastrarUserComponent } from './views/users/cadastrar-user/cadastrar-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormMensagemComponent,
    UsersComponent,
    PesquisarUserComponent,
    GridUsersComponent,
    CadastrarUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
