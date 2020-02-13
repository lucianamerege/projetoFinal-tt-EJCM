import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { PrecisaEstarLogadoGuard } from '../guards/precisaEstarLogado/precisa-estar-logado.guard';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule),
              canActivate: [PrecisaEstarLogadoGuard]
            }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule),
              canActivate: [PrecisaEstarLogadoGuard]
          }
        ]
      },
      {
        path: 'oferta',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./oferta/oferta.module').then(m => m.OfertaPageModule)
          }
        ]
      },
      {
        path: 'historico',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./historico/historico.module').then(m => m.HistoricoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full'
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'avaliacao',
    loadChildren: () => import('./avaliacao/avaliacao.module').then( m => m.AvaliacaoPageModule)
  },
  {
    path: 'list-perfil',
    loadChildren: () => import('./list-perfil/list-perfil.module').then( m => m.ListPerfilPageModule)
  },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }
