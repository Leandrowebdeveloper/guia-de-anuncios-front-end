import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceTermsPage } from './service-terms.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceTermsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceTermsPageRoutingModule {}
