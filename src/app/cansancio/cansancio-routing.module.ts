import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CansancioPage } from './cansancio.page';

const routes: Routes = [
  {
    path: '',
    component: CansancioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CansancioPageRoutingModule {}
