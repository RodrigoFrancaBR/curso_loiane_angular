import { AgendamentoComponent } from './views/agendamento/agendamento.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { UsersComponent } from './views/users/users.component';
import { CadastrarUserComponent } from './views/users/cadastrar-user/cadastrar-user.component';
import { GridUsersComponent } from './views/users/grid-users/grid-users.component';

const APP_ROUTES: Routes = [
    {
        path: 'users/add',
        component: CadastrarUserComponent
    },
    {
        path: 'users',
        component: GridUsersComponent
    },
    {
        path: '',
        component: UsersComponent
    },
    {
        path: 'agendamento',
        component: AgendamentoComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
