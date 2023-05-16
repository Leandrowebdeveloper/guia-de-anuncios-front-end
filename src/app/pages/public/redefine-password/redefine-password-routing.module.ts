import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedefinePasswordPage } from './redefine-password.page';
import { RedefinePasswordResolver } from './guard/resolve.guard';
import { PublicAutorizationGuard } from 'src/app/services/auth/guard/public-autorization/public-autorization.guard';

const routes: Routes = [
  {
    path: '',
    component: RedefinePasswordPage,
    // canActivate:[PublicAutorizationGuard],
    // canLoad: [PublicAutorizationGuard],
    resolve: {
      redefinePassword: RedefinePasswordResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedefinePasswordPageRoutingModule {}
