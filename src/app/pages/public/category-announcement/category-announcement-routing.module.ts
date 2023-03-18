import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryAnnouncementPage } from './category-announcement.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryAnnouncementPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryAnnouncementPageRoutingModule {}
