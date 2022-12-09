import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateAutorizationGuard } from 'src/app/services/auth/guard/private-autorization/private-autorization.guard';

import { DashboardPage } from './dashboard.page';
import { AnnouncementGuard } from './management/guard/announcement.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },
  {
    path: ':slug',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    resolve: {
      announcement: AnnouncementGuard,
    },
    loadChildren: () =>
      import('./management/announcement.module').then(
        (m) => m.AnnouncementPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AnnouncementGuard],
})
export class DashboardPageRoutingModule {}
