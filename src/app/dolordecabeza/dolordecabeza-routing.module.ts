import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DolordecabezaPage } from './dolordecabeza.page';

const routes: Routes = [
  {
    path: '',
    component: DolordecabezaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DolordecabezaPageRoutingModule {}
