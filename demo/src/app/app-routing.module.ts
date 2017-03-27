import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsComponent } from './charts/charts.component';
import { DocumentationComponent } from './documentation/documentation.component';

const routes: Routes = [
  { path: '', component: ChartsComponent },
  { path: 'documentation', component: DocumentationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }