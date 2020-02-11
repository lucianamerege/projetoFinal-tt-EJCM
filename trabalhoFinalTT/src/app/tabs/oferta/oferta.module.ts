import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OfertaPageRoutingModule } from './oferta-routing.module';

import { OfertaPage } from './oferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertaPageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: OfertaPage }])
  ],
  declarations: [OfertaPage]
})
export class OfertaPageModule {}
