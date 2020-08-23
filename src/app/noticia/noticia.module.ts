import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiaPageRoutingModule } from './noticia-routing.module';

import { NoticiaPage } from './noticia.page';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [NoticiaPage]
})
export class NoticiaPageModule {}
