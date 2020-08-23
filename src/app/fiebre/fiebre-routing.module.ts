import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiebrePage } from './fiebre.page';

const routes: Routes = [
  {
    path: '',
    component: FiebrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiebrePageRoutingModule {}
