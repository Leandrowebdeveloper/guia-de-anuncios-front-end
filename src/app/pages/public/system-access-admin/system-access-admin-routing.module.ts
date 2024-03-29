import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeactivateGuard } from 'src/app/components/form/guard/deactivate.guard';
import { PublicAutorizationGuard } from 'src/app/services/auth/guard/public-autorization/public-autorization.guard';
import { LoginAdminResolver } from './guard/resolve.guard';

import { SystemAccessAdminPage } from './system-access-admin.page';

const routes: Routes = [
  {
    path: '',
    component: SystemAccessAdminPage,
    canActivate: [PublicAutorizationGuard],
    canDeactivate: [DeactivateGuard],
    resolve: {
      systemAccess: LoginAdminResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoginAdminResolver],
})
export class LoginPageRoutingModule {}
