import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemAnnouncementComponent } from './list-item.component';

const routes: Routes = [
  {
    path: '',
    component: ListItemAnnouncementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListItemAnnouncementComponentRoutingModule {}
