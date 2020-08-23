import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CansancioPageRoutingModule } from './cansancio-routing.module';

import { CansancioPage } from './cansancio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CansancioPageRoutingModule
  ],
  declarations: [CansancioPage]
})
export class CansancioPageModule {}
