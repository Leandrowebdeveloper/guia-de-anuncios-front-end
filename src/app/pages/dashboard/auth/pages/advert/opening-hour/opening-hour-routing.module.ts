import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpeningHourPage } from './opening-hour.page';

const routes: Routes = [
  {
    path: '',
    component: OpeningHourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpeningHourPageRoutingModule {}
