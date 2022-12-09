import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletedItemAnnouncementPage } from './deleted-item.page';

const routes: Routes = [
  {
    path: '',
    component: DeletedItemAnnouncementPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletedItemAnnouncementPageRoutingModule {}
