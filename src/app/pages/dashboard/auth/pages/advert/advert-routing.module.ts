import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertPage } from './advert.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertPage,
  },
  {
    path: 'horario-de-funcionamento',
    loadChildren: () =>
      import('./opening-hour/opening-hour.module').then(
        (m) => m.OpeningHourPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertPageRoutingModule {}
