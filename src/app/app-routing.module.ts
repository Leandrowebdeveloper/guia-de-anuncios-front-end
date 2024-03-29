import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/guard/init/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./nav/nav.module').then((m) => m.NavComponentModule),
    resolve: {
      init: AuthGuard,
    },
    canLoad: [AuthGuard],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
