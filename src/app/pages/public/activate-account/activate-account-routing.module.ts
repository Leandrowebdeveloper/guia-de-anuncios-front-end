import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicAutorizationGuard } from 'src/app/services/auth/guard/public-autorization/public-autorization.guard';

import { ActivateAccountPage } from './activate-account.page';
import { ActivateAccountResolver } from './guard/resolve.guard';

const routes: Routes = [
  {
    path: '',
    component: ActivateAccountPage,
    canActivate: [PublicAutorizationGuard],
    canLoad: [PublicAutorizationGuard],
    resolve: {
      activateAccount: ActivateAccountResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ActivateAccountResolver],
})
export class ActivateAccountPageRoutingModule {}
