import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateAutorizationGuard } from '../services/auth/guard/private-autorization/private-autorization.guard';
import { PublicAutorizationGuard } from '../services/auth/guard/public-autorization/public-autorization.guard';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () =>
      import('../pages/public/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'categoria/:announcement',
    loadChildren: () =>
      import('../pages/public/announcement/announcement.module').then(
        (m) => m.AnnouncementPageModule
      ),
  },
  {
    path: 'erro',
    loadChildren: () =>
      import('../pages/public/not-found/not-found.module').then(
        (m) => m.NotFoundPageModule
      ),
  },
  {
    path: 'noticias',
    loadChildren: () =>
      import('../pages/public/news/news.module').then((m) => m.NewsPageModule),
  },
  {
    path: 'classificados',
    loadChildren: () =>
      import('../pages/public/classified/classified.module').then(
        (m) => m.ClassifiedPageModule
      ),
  },
  {
    path: 'sair',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('../pages/public/logout/logout.module').then(
        (m) => m.LogoutPageModule
      ),
  },
  {
    path: 'cadastrar',
    canActivate: [PublicAutorizationGuard],
    canLoad: [PublicAutorizationGuard],
    loadChildren: () =>
      import('../pages/public/system-access/system-access.module').then(
        (m) => m.SystemAccessPageModule
      ),
  },
  {
    path: 'entrar',
    canActivate: [PublicAutorizationGuard],
    canLoad: [PublicAutorizationGuard],
    loadChildren: () =>
      import('../pages/public/system-access/system-access.module').then(
        (m) => m.SystemAccessPageModule
      ),
  },
  {
    path: 'entrar/admin',
    canActivate: [PublicAutorizationGuard],
    canLoad: [PublicAutorizationGuard],
    loadChildren: () =>
      import(
        '../pages/public/system-access-admin/system-access-admin.module'
      ).then((m) => m.SystemAccessAdminPageModule),
  },
  {
    path: 'recuperar-senha',
    canActivate: [PublicAutorizationGuard],
    canLoad: [PublicAutorizationGuard],
    loadChildren: () =>
      import('../pages/public/system-access/system-access.module').then(
        (m) => m.SystemAccessPageModule
      ),
  },
  {
    path: 'redefinir-senha/:token',
    canActivate: [PublicAutorizationGuard],
    canLoad: [PublicAutorizationGuard],
    loadChildren: () =>
      import('../pages/public/redefine-password/redefine-password.module').then(
        (m) => m.RedefinePasswordPageModule
      ),
  },
  {
    path: 'painel-de-controle',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('../pages/dashboard/auth/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: 'painel-de-controle/admin',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('../pages/dashboard/administrator/dashboard-admin.module').then(
        (m) => m.DashboardAdminPageModule
      ),
  },
  {
    path: 'ativar-conta/:token',
    canActivate: [PublicAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    loadChildren: () =>
      import('../pages/public/activate-account/activate-account.module').then(
        (m) => m.ActivateAccountPageModule
      ),
  },
  {
    path: 'termos-de-uso',
    loadChildren: () =>
      import('../pages/public/terms-of-use/terms-of-use.module').then(
        (m) => m.TermsOfUsePageModule
      ),
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/erro',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavComponentRoutingModule {}
