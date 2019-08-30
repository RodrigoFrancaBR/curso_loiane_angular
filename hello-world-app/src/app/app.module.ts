import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './views/users/users.component';
import { FormMensagemComponent } from './form-mensagem/form-mensagem.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { CadastrarUsuarioComponent } from './views/users/cadastrar-usuario/cadastrar-usuario.component';
import { PesquisarUsuarioComponent } from './views/users/pesquisar-usuario/pesquisar-usuario.component';
import { GridUsuariosComponent } from './views/users/grid-usuarios/grid-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    FormMensagemComponent,
    UsersComponent,
    CadastrarUsuarioComponent,
    PesquisarUsuarioComponent,
    GridUsuariosComponent,
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
