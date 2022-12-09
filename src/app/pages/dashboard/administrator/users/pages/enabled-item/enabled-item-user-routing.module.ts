import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnabledItemUserPage } from './enabled-item-user.page';

const routes: Routes = [
  {
    path: '',
    component: EnabledItemUserPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnabledItemUserPageRoutingModule {}
