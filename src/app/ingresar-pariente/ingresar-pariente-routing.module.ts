import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarParientePage } from './ingresar-pariente.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarParientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarParientePageRoutingModule {}
