import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPerfilPageRoutingModule } from './list-perfil-routing.module';

import { ListPerfilPage } from './list-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPerfilPageRoutingModule
  ],
  declarations: [ListPerfilPage]
})
export class ListPerfilPageModule {}
