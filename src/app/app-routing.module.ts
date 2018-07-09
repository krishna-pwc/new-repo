import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureComponent }   from './feature/feature.component';

const routes: Routes = [
  { path: '', redirectTo: '/feature', pathMatch: 'full' },
  { path: 'feature', component: FeatureComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}