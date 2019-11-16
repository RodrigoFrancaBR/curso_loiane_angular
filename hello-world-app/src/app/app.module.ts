import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { FormMensagemComponent } from './commons-component/form-mensagem/form-mensagem.component';
import { UsersComponent } from './views/users/users.component';
import { PesquisarUserComponent } from './views/users/pesquisar-user/pesquisar-user.component';
import { GridUsersComponent } from './views/users/grid-users/grid-users.component';
import { CadastrarUserComponent } from './views/users/cadastrar-user/cadastrar-user.component';
import { AgendamentoComponent } from './views/agendamento/agendamento.component';
import { FormMensagemError } from './util/form-mensagem-error';
import { InputFieldComponent } from './commons-component/input-field/input-field.component';


@NgModule({
  declarations: [
    AppComponent,
    FormMensagemComponent,
    UsersComponent,
    PesquisarUserComponent,
    GridUsersComponent,
    CadastrarUserComponent,
    AgendamentoComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [FormMensagemError],
  bootstrap: [AppComponent]
})
export class AppModule { }
