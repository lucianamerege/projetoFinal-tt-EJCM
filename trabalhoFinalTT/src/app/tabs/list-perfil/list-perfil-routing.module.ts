import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPerfilPage } from './list-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: ListPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPerfilPageRoutingModule {}
