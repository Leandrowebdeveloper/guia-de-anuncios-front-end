import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupInstagramPage } from './popup-instagram.page';

const routes: Routes = [
  {
    path: '',
    component: PopupInstagramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupInstagramPageRoutingModule {}
