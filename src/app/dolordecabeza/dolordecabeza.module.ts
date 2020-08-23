import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DolordecabezaPageRoutingModule } from './dolordecabeza-routing.module';

import { DolordecabezaPage } from './dolordecabeza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DolordecabezaPageRoutingModule
  ],
  declarations: [DolordecabezaPage]
})
export class DolordecabezaPageModule {}
