import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateAutorizationGuard } from 'src/app/services/auth/guard/private-autorization/private-autorization.guard';
import { UserManagementPage } from './management.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [PrivateAutorizationGuard],
    canLoad: [PrivateAutorizationGuard],
    component: UserManagementPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
