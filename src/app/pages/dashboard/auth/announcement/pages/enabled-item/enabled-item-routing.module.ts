import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnabledItemAnnouncementPage } from './enabled-item.page';

const routes: Routes = [
  {
    path: '',
    component: EnabledItemAnnouncementPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnabledItemAnnouncementPageRoutingModule {}
