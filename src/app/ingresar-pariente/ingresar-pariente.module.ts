import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarParientePageRoutingModule } from './ingresar-pariente-routing.module';

import { IngresarParientePage } from './ingresar-pariente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarParientePageRoutingModule
  ],
  declarations: [IngresarParientePage]
})
export class IngresarParientePageModule {}
