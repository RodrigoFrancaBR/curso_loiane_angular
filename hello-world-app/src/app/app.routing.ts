import { UsersComponent } from './views/users/users.component';
import { CadastrarUserComponent } from './views/users/cadastrar-user/cadastrar-user.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { GridUsersComponent } from './views/users/grid-users/grid-users.component';

const APP_ROUTES: Routes = [
    {
        path: '/add',
        component: CadastrarUserComponent
    },
    {
        path: '/todos',
        component: GridUsersComponent
    },
    // {
    //     path: '',
    //     component: UsersComponent
    // },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
