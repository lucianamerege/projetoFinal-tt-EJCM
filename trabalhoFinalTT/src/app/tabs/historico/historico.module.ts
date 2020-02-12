import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoricoPageRoutingModule } from './historico-routing.module';
import { LivroHistoricoComponent } from '../../component/livro-historico/livro-historico.component';
import { HistoricoPage } from './historico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoPageRoutingModule,
    RouterModule.forChild([{ path: '', component: HistoricoPage }])
  ],
  declarations: [HistoricoPage, LivroHistoricoComponent]
})
export class HistoricoPageModule {}
