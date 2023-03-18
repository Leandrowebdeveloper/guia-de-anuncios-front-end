import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementCardComponent } from './card.component';

const routes: Routes = [
  {
    path: '',
    component: AnnouncementCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardAnnouncementComponentRoutingModule {}
