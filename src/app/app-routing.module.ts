import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./pages/demo/demo.module').then((m) => m.DemoModule),
  },
  {
    path: 'changelog',
    loadChildren: () =>
      import('./pages/changelog/changelog.module').then(
        (m) => m.ChangelogModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
