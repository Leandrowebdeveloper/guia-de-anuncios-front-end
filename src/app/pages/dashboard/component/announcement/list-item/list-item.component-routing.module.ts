import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementListItemComponent } from './list-item.component';

const routes: Routes = [
  {
    path: '',
    component: AnnouncementListItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListItemAnnouncementComponentRoutingModule {}
