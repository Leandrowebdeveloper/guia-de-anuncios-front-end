import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateAutorizationGuard } from 'src/app/services/auth/guard/private-autorization/private-autorization.guard';
import { CategoryManagementResolver } from './categoryAdvert/management/guard/resolve.guard';
import { ChangeEmailResolver } from '../auth/pages/change-email/guard/change-email.guard';

import { DashboardPage } from './dashboard-admin.page';
import { UserManagementResolver } from './users/management/guard/resolve.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },
  {
    path: 'usuario/:id/alterar-email/:token',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import(
        'src/app/pages/dashboard/auth/pages/change-email/change-email.module'
      ).then((m) => m.ChangeEmailPageModule),
    resolve: {
      changeEmail: ChangeEmailResolver,
    },
  },
  {
    path: 'usuario',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('src/app/pages/dashboard/auth/pages/user/user.module').then(
        (m) => m.UserPageModule
      ),
  },
  {
    path: 'usuarios',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersPageModule),
  },
  {
    path: 'usuarios/excluidos',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersPageModule),
  },
  {
    path: 'manutencao/usuario/:id',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('./users/management/management.module').then(
        (m) => m.ManagementPageModule
      ),
    resolve: {
      user: UserManagementResolver,
    },
  },
  {
    path: 'anuncios',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('./Advert/advert.module').then((m) => m.AdvertPageModule),
  },
  {
    path: 'anuncio/:id',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('./Advert/advert.module').then((m) => m.AdvertPageModule),
  },
  {
    path: 'categorias',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('./categoryAdvert/category-advert.module').then(
        (m) => m.CategoryAdvertisementPageModule
      ),
  },
  {
    path: 'categorias/excluidas',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('./categoryAdvert/category-advert.module').then(
        (m) => m.CategoryAdvertisementPageModule
      ),
  },
  {
    path: 'manutencao/categoria/:id',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('./categoryAdvert/management/management.module').then(
        (m) => m.ManagementPageModule
      ),
    resolve: {
      category: CategoryManagementResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ChangeEmailResolver,
    UserManagementResolver,
    CategoryManagementResolver,
  ],
})
export class DashboardAdminPageRoutingModule {}
