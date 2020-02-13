import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
<<<<<<< HEAD
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab1/tab1.module').then(m => m.Tab1PageModule)
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
                    },

                ]
            },
            {
                path: 'livro',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./livro/livro.module').then(m => m.LivroPageModule)
                    }]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
=======
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
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
>>>>>>> Matheus_FK_Tabelas_Back
        ]
    },

    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
<<<<<<< HEAD
    },

]
=======
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },

];
>>>>>>> Matheus_FK_Tabelas_Back

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }
