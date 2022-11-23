import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletedItemPage } from './deleted-item.page';

const routes: Routes = [
  {
    path: '',
    component: DeletedItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletedItemPageRoutingModule {}
