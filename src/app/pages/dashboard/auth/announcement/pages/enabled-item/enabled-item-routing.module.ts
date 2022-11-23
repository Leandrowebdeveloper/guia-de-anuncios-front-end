import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnabledItemPage } from './enabled-item.page';

const routes: Routes = [
  {
    path: '',
    component: EnabledItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnabledItemPageRoutingModule {}
