import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InduccionPageRoutingModule } from './induccion-routing.module';

import { InduccionPage } from './induccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InduccionPageRoutingModule
  ],
  declarations: [InduccionPage]
})
export class InduccionPageModule {}
