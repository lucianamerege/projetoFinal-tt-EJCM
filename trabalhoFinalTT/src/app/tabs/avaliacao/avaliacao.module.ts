import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvaliacaoPageRoutingModule } from './avaliacao-routing.module';

import { AvaliacaoPage } from './avaliacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvaliacaoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AvaliacaoPage]
})
export class AvaliacaoPageModule {}
