import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateAutorizationGuard } from 'src/app/services/auth/guard/private-autorization/private-autorization.guard';

import { DashboardPage } from './dashboard.page';
import { ChangeEmailResolver } from './user/change-email/guard/change-email.guard';

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
      import('./user/change-email/change-email.module').then(
        (m) => m.ChangeEmailPageModule
      ),
    resolve: {
      changeEmail: ChangeEmailResolver,
    },
  },
  {
    path: 'usuario',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('./user/management.module').then((m) => m.UserPageModule),
  },
  {
    path: 'anuncio',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('./announcement/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ChangeEmailResolver],
})
export class DashboardPageRoutingModule {}
