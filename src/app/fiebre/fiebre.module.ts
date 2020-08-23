import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiebrePageRoutingModule } from './fiebre-routing.module';

import { FiebrePage } from './fiebre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiebrePageRoutingModule
  ],
  declarations: [FiebrePage]
})
export class FiebrePageModule {}
