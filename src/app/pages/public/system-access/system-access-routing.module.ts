import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeactivateGuard } from 'src/app/components/form/guard/deactivate.guard';
import { PublicAutorizationGuard } from 'src/app/services/auth/guard/public-autorization/public-autorization.guard';
import { SystemAccessResolver } from './guard/resolve.guard';

import { SystemAccessPage } from './system-access.page';

const routes: Routes = [
  {
    path: '',
    component: SystemAccessPage,
    canActivate: [PublicAutorizationGuard],
    canLoad: [PublicAutorizationGuard],
    canDeactivate: [DeactivateGuard],
    resolve: {
      systemAccess: SystemAccessResolver,
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SystemAccessResolver]
})
export class LoginPageRoutingModule {}
