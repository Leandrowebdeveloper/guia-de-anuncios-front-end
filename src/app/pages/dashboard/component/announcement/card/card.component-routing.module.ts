import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardAnnouncementComponent } from './card.component';

const routes: Routes = [
  {
    path: '',
    component: CardAnnouncementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardAnnouncementComponentRoutingModule {}
