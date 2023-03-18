import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletedItemUserPage } from './deleted-item-user.page';

const routes: Routes = [
  {
    path: '',
    component: DeletedItemUserPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletedItemUserPageRoutingModule {}
