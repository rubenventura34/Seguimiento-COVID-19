import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InduccionPage } from './induccion.page';

const routes: Routes = [
  {
    path: '',
    component: InduccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InduccionPageRoutingModule {}
